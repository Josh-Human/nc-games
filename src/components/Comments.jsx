import { useEffect, useState } from "react";
import { getReviewComments } from "../utils/api";

const Comments = ({ reviewId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getReviewComments(reviewId).then((result) => {
            setComments(result);
            console.log(result);
        });
    }, []);

    return (
        <ul>
            {comments.length < 1
                ? "No Comments"
                : comments.map((comment) => {
                      return (
                          <li key={comment.comment_id}>
                              <p>{comment.author}</p>
                              <p>{comment.body}</p>
                              <p>{comment.created_at}</p>
                          </li>
                      );
                  })}
        </ul>
    );
};

export default Comments;
