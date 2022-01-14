import { useEffect, useState } from "react";
import { getReviewComments } from "../../utils/api";
import Comment from "./Comment";
import PostComment from "./PostComment";

const Comments = ({ reviewId, username }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getReviewComments(reviewId).then((result) => {
            setComments(() => {
                return result.sort((a, b) => a.comment_id - b.comment_id);
            });
        });
    }, [reviewId]);

    return (
        <>
            <PostComment
                review_id={reviewId}
                username={username}
                setComments={setComments}
            />
            <ul>
                {comments.length < 1
                    ? "No Comments"
                    : comments.map((comment) => {
                          return (
                              <li key={comment.comment_id}>
                                  <Comment
                                      comment={comment}
                                      setComments={setComments}
                                      review_id={reviewId}
                                      username={username}
                                  />
                              </li>
                          );
                      })}
            </ul>
        </>
    );
};

export default Comments;
