import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../utils/api";
import Vote from "./Vote";
import "./css/Review.css";
import Comments from "./Comments";

const Review = ({ reviews, setReviews }) => {
    const [review, setReview] = useState({});
    const { reviewId } = useParams();

    useEffect(() => {
        getReview(reviewId).then((result) => {
            setReview(result);
        });
    }, [reviewId]);
    return (
        <div className="single_review">
            <span style={{ display: "block" }}>
                <li key={review.review_id} className="single_review__card">
                    <p>{review.title}</p>
                    <img src={review.review_img_url}></img>
                    <p>{review.owner}</p>
                    <p>{review.created_at}</p>
                    <p>{review.review_body}</p>
                    <Vote review={review} setReviews={setReviews} />
                    <p>{review.comment_count}</p>
                    <p>{review.category}</p>
                    <Comments reviewId={reviewId} />
                </li>
            </span>
        </div>
    );
};

export default Review;
