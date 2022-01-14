import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../../utils/api";
import Vote from "../Vote";
import "../css/Review.css";
import Comments from "./Comments";
import Error from "../Error.jsx";

const Review = ({ username }) => {
    const [review, setReview] = useState({});
    const { review_id } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        getReview(review_id)
            .then((result) => {
                setReview(result);
            })
            .catch((err) => {
                setError({ err });
            });
    }, [review_id]);

    if (error) {
        return <Error response={error.err.response} />;
    }
    return (
        <div className="single_review">
            <span style={{ display: "block" }}>
                <li key={review.review_id} className="single_review__card">
                    <p>{review.title}</p>
                    <img src={review.review_img_url}></img>
                    <p>{review.owner}</p>
                    <p>{review.created_at}</p>
                    <p>{review.review_body}</p>
                    <Vote item={review} itemStr={"review"} />
                    <p>{review.comment_count}</p>
                    <p>{review.category}</p>
                    <Comments review_id={review_id} username={username} />
                </li>
            </span>
        </div>
    );
};

export default Review;
