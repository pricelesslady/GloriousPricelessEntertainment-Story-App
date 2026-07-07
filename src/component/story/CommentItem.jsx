import { useReadingPreferences } from "../../content/ReadingPreferencesContext";

const CommentItem = ({ comment }) => {
  const { currentTheme } = useReadingPreferences();

  // Generate a consistent avatar color from the display name
  const avatarColors = [
    "#2563EB",
    "#16A34A",
    "#DC2626",
    "#9333EA",
    "#EA580C",
    "#0891B2",
    "#CA8A04",
    "#4F46E5",
  ];

  const colorIndex =
    comment.displayName.charCodeAt(0) % avatarColors.length;

  const avatarColor = avatarColors[colorIndex];

  return (
    <article
      className="py-6"
      style={{
        borderBottom: `1px solid ${currentTheme.border}`,
      }}
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
          style={{
            backgroundColor: avatarColor,
          }}
        >
          {comment.displayName.charAt(0).toUpperCase()}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3
              className="font-semibold"
              style={{
                color: currentTheme.heading,
              }}
            >
              {comment.displayName}
            </h3>

            <span
              className="mt-1 text-sm sm:mt-0"
              style={{
                color: currentTheme.mutedText,
              }}
            >
              {comment.createdAt}
            </span>
          </div>

          <p
            className="mt-3 leading-8"
            style={{
              color: currentTheme.text,
            }}
          >
           {comment.message}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CommentItem;