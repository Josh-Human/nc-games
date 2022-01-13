import { getAllReviews } from "../../utils/api";
import BasicReview from "../BasicReview";
import Query from "../Query/Query.jsx";
import { useEffect } from "react";
import "../css/Reviews.css";

const Reviews = ({ setReviewId, reviews, setReviews }) => {
    useEffect(() => {
        getAllReviews().then((result) => {
            setReviews(result);
        });
    }, [setReviews]);

    return (
        <div className="reviews">
            <Query setReviews={setReviews} />
            <BasicReview
                reviews={reviews}
                setReviews={setReviews}
                setReviewId={setReviewId}
            />
        </div>
    );
};

export default Reviews;
