import { Link } from "react-router-dom";
import "./css/BasicReview.css";
import Vote from "./Vote.jsx";

const BasicReview = ({ reviews, setReviews, setReviewId }) => {
    return (
        <ul>
            {reviews.map((review) => {
                return (
                    <Link
                        to={`review/${review.review_id}`}
                        onClick={() => {
                            setReviewId(review.review_id);
                        }}
                    >
                        <span style={{ display: "block" }}>
                            <li
                                key={review.review_id}
                                className="reviews__card"
                            >
                                <p>{review.title}</p>
                                <img src={review.review_img_url}></img>
                                <p>{review.owner}</p>
                                <p>{review.created_at}</p>
                                <Vote review={review} setReviews={setReviews} />
                                <p>{review.comment_count}</p>
                                <p>{review.category}</p>
                            </li>
                        </span>
                    </Link>
                );
            })}
        </ul>
    );
};

export default BasicReview;
