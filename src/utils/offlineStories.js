import { openDB } from "idb";

const DB_NAME = "gpe-offline-db";
const DB_VERSION = 1;
const STORY_STORE = "stories";

const getDB = () =>
  openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORY_STORE)) {
        db.createObjectStore(STORY_STORE, {
          keyPath: "slug",
        });
      }
    },
  });

export const saveStoryOffline = async (story, chapters) => {
  const db = await getDB();

  await db.put(STORY_STORE, {
    ...story,
    chapters,
    savedAt: new Date().toISOString(),
  });
};

export const getOfflineStory = async (slug) => {
  const db = await getDB();

  return db.get(STORY_STORE, slug);
};

export const isStoryAvailableOffline = async (slug) => {
  const story = await getOfflineStory(slug);

  return Boolean(story);
};