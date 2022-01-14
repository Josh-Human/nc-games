import { Link } from "react-router-dom";
import "./css/BasicReview.css";
import Vote from "./Vote.jsx";

const BasicReview = ({ reviews, setReviewId }) => {
    return (
        <ul className="list">
            {reviews.map((review) => {
                return (
                    <li key={review.review_id} className="list__card">
                        <p>
                            <Link
                                to={`/review/${review.review_id}`}
                                onClick={() => {
                                    setReviewId(review.review_id);
                                }}
                            >
                                {review.title}
                            </Link>
                        </p>
                        <img src={review.review_img_url}></img>
                        <p>{review.owner}</p>
                        <p>{review.created_at}</p>
                        <Vote item={review} itemStr={"review"} />
                        <p>{review.comment_count}</p>
                        <p>{review.category}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default BasicReview;
