import { deleteComment, getReviewComments } from "../../utils/api";
import Vote from "../Vote";

const OwnComment = ({ comment, setComments, review_id }) => {
    const handleDeleteComment = () => {
        deleteComment(comment.comment_id).then(() => {
            getReviewComments(review_id).then((result) => {
                setComments(() => {
                    return result.sort((a, b) => a.comment_id - b.comment_id);
                });
            });
        });
    };
    return (
        <>
            <p> HEY YOU MADE THIS COMMENT!</p>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>{comment.created_at}</p>
            <Vote item={comment} itemStr={"comment"} />
            <button onClick={handleDeleteComment}>Delete this comment</button>
        </>
    );
};
export default OwnComment;
