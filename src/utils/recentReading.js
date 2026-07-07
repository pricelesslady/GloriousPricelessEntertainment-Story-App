export const saveRecentlyRead = ({
  storySlug,
  storyTitle,
  chapterNumber,
}) => {
  localStorage.setItem(
    "gpeRecentlyRead",
    JSON.stringify({
      storySlug,
      storyTitle,
      chapterNumber,
      updatedAt: Date.now(),
    })
  );
};

export const getRecentlyRead = () => {
  const saved = localStorage.getItem("gpeRecentlyRead");

  if (!saved) return null;

  return JSON.parse(saved);
};

export const clearRecentlyRead = () => {
  localStorage.removeItem("gpeRecentlyRead");
};