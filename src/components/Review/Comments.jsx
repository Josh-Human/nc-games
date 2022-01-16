import { useEffect, useState } from "react";
import { getReviewComments } from "../../utils/api";
import Comment from "./Comment";
import PostComment from "./PostComment";
import "../css/Comments.css";

const Comments = ({ review_id, username }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        let isMounted = true;

        getReviewComments(review_id).then((result) => {
            if (isMounted) {
                setComments(() => {
                    return result.sort((a, b) => a.comment_id - b.comment_id);
                });
            }
        });
        return () => {
            isMounted = false;
        };
    }, [review_id]);

    return (
        <div className="comments">
            <PostComment
                review_id={review_id}
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
                                      review_id={review_id}
                                      username={username}
                                  />
                              </li>
                          );
                      })}
            </ul>
        </div>
    );
};

export default Comments;
