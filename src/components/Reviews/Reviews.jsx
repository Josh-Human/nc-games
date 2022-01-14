import { getQueriedReviews } from "../../utils/api";
import BasicReview from "../BasicReview";
import Query from "../Query/Query.jsx";
import { useEffect, useState } from "react";
import "../css/Reviews.css";
import { GridLoader } from "react-spinners";

const Reviews = ({ setReviewId, reviews, setReviews }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        getQueriedReviews().then((result) => {
            setReviews(result);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="reviews">
            <Query setReviews={setReviews} />
            {isLoading ? (
                <GridLoader />
            ) : (
                <div className="reviews__container">
                    <BasicReview reviews={reviews} setReviewId={setReviewId} />
                </div>
            )}
        </div>
    );
};

export default Reviews;
