import { getAllReviews } from "../utils/api";
import BasicReview from "./BasicReview";
import Query from "./Query";
import { useEffect, useState } from "react";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getAllReviews().then((result) => {
            setReviews(result);
        });
    }, []);

    return (
        <>
            <p>Reviews</p>;
            <Query setReviews={setReviews} />
            <BasicReview reviews={reviews} />
        </>
    );
};

export default Reviews;
