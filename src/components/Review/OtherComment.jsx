import Vote from "../Vote";

const OtherComment = ({ comment }) => {
    return (
        <>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>{comment.created_at}</p>
            <Vote item={comment} itemStr={"comment"} />
        </>
    );
};
export default OtherComment;
