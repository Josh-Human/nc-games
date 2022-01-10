import SortBy from "./SortBy";
import "./Query.css";
import { getQueriedReviews } from "../utils/api";
import { useState } from "react";
import OrderBy from "./OrderBy";

const Query = ({ setReviews }) => {
    const [sortTerm, setSortTerm] = useState("created_at");
    const [orderTerm, setOrderTerm] = useState("asc");
    const [limitTerm, setLimitTerm] = useState(100);

    const handleQuery = () => {
        getQueriedReviews(sortTerm, orderTerm, limitTerm).then((result) => {
            setReviews(result);
        });
    };

    return (
        <>
            <h2>Latest Reviews</h2>
            <SortBy setSortTerm={setSortTerm} sortTerm={sortTerm} />
            <OrderBy setOrderTerm={setOrderTerm} />
            <p>No of results</p>
            <p>Search ID</p>
            <button onClick={handleQuery}>Submit</button>
        </>
    );
};

export default Query;

// SELECT reviews.review_id, title, review_body, designer,
// review_img_url, reviews.votes, category, owner, reviews.created_at,
// COUNT(comments.comment_id) AS comment_count
