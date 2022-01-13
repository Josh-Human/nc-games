import { useState } from "react";
import { getReviewComments, postComment } from "../../utils/api";

const PostComment = ({ review_id, username, setComments }) => {
    const [commentBody, setCommentBody] = useState(null);
    const [commentBox, setCommentBox] = useState("Write a comment...");
    const handleNewComment = (event) => {
        event.preventDefault();
        setCommentBody(commentBox);
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
                    value={commentBox}
                    onFocus={() => {
                        setCommentBox("");
                    }}
                    onChange={(event) => {
                        setCommentBox(event.target.value);
                    }}
                ></input>
                <input type="submit"></input>
            </form>
        </div>
    );
};
export default PostComment;
