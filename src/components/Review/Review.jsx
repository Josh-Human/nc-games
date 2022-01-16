import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../../utils/api";
import Vote from "../Vote";
import "../css/Review.css";
import Comments from "./Comments";
import Error from "../Error.jsx";
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

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
        <div className="list">
            <span style={{ display: "block" }}>
                <li key={review.review_id} className="list__card">
                    <p>{review.title}</p>
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
                    <p className="body">{review.review_body}</p>
                    <div className="list__card__rowC">
                        <p>🗨️{review.comment_count} &nbsp;</p>
                        <p id="cat">🕹️&nbsp;{review.category}</p>
                    </div>
                    <Comments review_id={review_id} username={username} />
                </li>
            </span>
        </div>
    );
};

export default Review;
