import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg font-semibold">
          No comments yet.
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Be the first to share your thoughts about this chapter.
        </p>
      </div>
    );
  }

  return (
    <section>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </section>
  );
};

export default CommentList;