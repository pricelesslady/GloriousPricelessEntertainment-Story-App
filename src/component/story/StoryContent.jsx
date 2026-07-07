import { useReadingPreferences } from "../../content/ReadingPreferencesContext";

const StoryContent = ({ chapter }) => {
  const { currentTheme } = useReadingPreferences();

  return (
    <section className="mx-auto mt-12 w-full max-w-5xl px-6 md:px-8">
      {/* Top Divider */}
      <div
        className="h-px w-full"
        style={{
          backgroundColor: currentTheme.border,
        }}
      />

      {/* Chapter Heading */}
      <div className="py-8 text-center">
        <p
          className="text-sm font-semibold uppercase tracking-[0.35em]"
          style={{
            color: currentTheme.primary,
          }}
        >
          Chapter {chapter.chapterNumber}
        </p>

        <h2
          className="mt-3 text-3xl font-bold md:text-4xl"
          style={{
            color: currentTheme.heading,
          }}
        >
          {chapter.title}
        </h2>
      </div>

      {/* Bottom Divider */}
      <div
        className="h-px w-full"
        style={{
          backgroundColor: currentTheme.border,
        }}
      />

      {/* Story Body */}
      <article
        className="mt-10 whitespace-pre-line text-lg leading-9 md:text-xl md:leading-10"
        style={{
          color: currentTheme.text,
        }}
      >
        {chapter.content}
      </article>
    </section>
  );
};

export default StoryContent;