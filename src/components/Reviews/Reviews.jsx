import { getAllReviews } from "../../utils/api";
import BasicReview from "../BasicReview";
import Query from "../Query/Query.jsx";
import { useEffect, useState } from "react";
import "../css/Reviews.css";
import { GridLoader } from "react-spinners";

const RESULTS_PER_PAGE = 5;

const Reviews = ({ setReviewId, reviews, setReviews }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [currPage, setCurrPage] = useState(0);

    useEffect(() => {
        setIsLoading(true);

        getAllReviews().then((result) => {
            setReviews(
                result.slice(
                    currPage * RESULTS_PER_PAGE,
                    (currPage + 1) * RESULTS_PER_PAGE
                )
            );
            setIsLoading(false);
        });
    }, [setReviews, currPage]);

    return (
        <div className="reviews">
            <Query setReviews={setReviews} />
            {isLoading ? (
                <GridLoader />
            ) : (
                <div className="reviews__container">
                    <BasicReview
                        reviews={reviews}
                        setReviews={setReviews}
                        setReviewId={setReviewId}
                    />
                    <button
                        onClick={() => {
                            setCurrPage(currPage - 1);
                        }}
                        disabled={currPage === 0}
                    >
                        Back
                    </button>
                    <button
                        onClick={() => {
                            setCurrPage(currPage + 1);
                        }}
                        disabled={currPage * RESULTS_PER_PAGE >= reviews.length}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Reviews;
