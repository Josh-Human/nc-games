import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../utils/api";
import Vote from "./Vote";
import "./css/Review.css";

const Review = ({ reviewId, reviews, setReviews }) => {
    const [review, setReview] = useState({});

    useEffect(() => {
        getReview(reviewId).then((result) => {
            setReview(result);
        });
    }, []);
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
                </li>
            </span>
        </div>
    );
};

export default Review;
