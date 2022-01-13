import Vote from "./Vote";

const OwnComment = ({ comment }) => {
    return (
        <>
            <p> HEY YOU MADE THIS COMMENT!</p>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>{comment.created_at}</p>
            <Vote item={comment} itemStr={"comment"} />
            {/* <DeleteComment /> */}
        </>
    );
};
export default OwnComment;
