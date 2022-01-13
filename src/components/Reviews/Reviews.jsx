import { getAllReviews } from "../../utils/api";
import BasicReview from "../BasicReview";
import Query from "../Query/Query.jsx";
import { useEffect, useState } from "react";
import "../css/Reviews.css";
import { GridLoader } from "react-spinners";

const Reviews = ({ setReviewId, reviews, setReviews }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);

        getAllReviews().then((result) => {
            setReviews(result);
            setIsLoading(false);
        });
    }, [setReviews]);

    return (
        <div className="reviews">
            <Query setReviews={setReviews} />
            {isLoading ? (
                <GridLoader />
            ) : (
                <BasicReview
                    reviews={reviews}
                    setReviews={setReviews}
                    setReviewId={setReviewId}
                />
            )}
        </div>
    );
};

export default Reviews;
