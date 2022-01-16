import { deleteComment, getReviewComments } from "../../utils/api";
import Vote from "../Vote";
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
const OwnComment = ({ comment, setComments, review_id, username }) => {
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
        <div className="comment">
            <p>{comment.body}</p>

            <div className="bottom_container">
                <div className="author_date">
                    <p>{comment.author}</p>
                    {/* <br></br> */}
                    <p>{dayjs(comment.created_at).fromNow()}</p>
                </div>
                <div className="votes">
                    <Vote item={comment} itemStr={"comment"} />
                </div>
            </div>
            {username === comment.author ? (
                <button onClick={handleDeleteComment}>
                    Delete this comment
                </button>
            ) : null}
        </div>
    );
};
export default OwnComment;
