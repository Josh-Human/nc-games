import { useState } from "react";
import { getReviewComments, postComment } from "../../utils/api";

const PostComment = ({ review_id, username, setComments }) => {
    const [commentBox, setCommentBox] = useState("");
    const handleNewComment = (event) => {
        event.preventDefault();
        postComment(review_id, username, event.target.elements[0].value).then(
            () => {
                setCommentBox("");
                getReviewComments(review_id).then((result) => {
                    setComments(() => {
                        return result.sort(
                            (a, b) => a.comment_id - b.comment_id
                        );
                    });
                });
            }
        );
    };

    return (
        <div>
            <form onSubmit={handleNewComment}>
                <input
                    type="text"
                    placeholder="Write a comment..."
                    value={commentBox}
                    onFocus={() => {
                        setCommentBox("");
                    }}
                    onChange={(event) => {
                        setCommentBox(event.target.value);
                    }}
                    required={true}
                ></input>
                <button>Post!</button>
            </form>
        </div>
    );
};
export default PostComment;
