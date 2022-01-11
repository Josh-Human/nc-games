import "./css/BasicReview.css";
import Vote from "./Vote.jsx";
const BasicReview = ({ reviews, setReviews }) => {
    return (
        <ul>
            {reviews.map((review) => {
                return (
                    <li key={review.review_id} className="reviews__card">
                        <p>{review.title}</p>
                        <img src={review.review_img_url}></img>
                        <p>{review.owner}</p>
                        <p>{review.created_at}</p>
                        <p>{review.category}</p>
                        <Vote review={review} setReviews={setReviews} />
                        <p>{review.comment_count}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default BasicReview;
