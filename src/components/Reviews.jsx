import { getAllReviews } from "../utils/api";
import BasicReview from "./BasicReview";
import Query from "./Query";
import { useEffect, useState } from "react";
import "./css/Reviews.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getAllReviews().then((result) => {
            setReviews(result);
        });
    }, []);

    return (
        <div className="reviews">
            <Query setReviews={setReviews} />
            <BasicReview reviews={reviews} />
        </div>
    );
};

export default Reviews;
