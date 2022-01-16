import { Link } from "react-router-dom";
import "./css/BasicReview.css";
import Vote from "./Vote.jsx";
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

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
                        <div className="list__card__rowA">
                            <img src={review.review_img_url}></img>
                            <Vote
                                className="list__card__rowA__vote"
                                item={review}
                                itemStr={"review"}
                            />
                        </div>
                        <div className="list__card__rowB">
                            <p>👤{review.owner}&nbsp;-&nbsp;</p>
                            <br></br>
                            <p>{dayjs(review.created_at).fromNow()}</p>
                        </div>
                        <div className="list__card__rowC">
                            <p>🗨️{review.comment_count} &nbsp;</p>
                            <p id="cat">🕹️&nbsp;{review.category}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default BasicReview;
