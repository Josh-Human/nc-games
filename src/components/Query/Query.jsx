import SortBy from "./SortBy";
import "../css/Query.css";
import { getQueriedReviews } from "../../utils/api";
import { useState } from "react";
import OrderBy from "./OrderBy";
import LimitResults from "./LimitResults";
import Search from "./Search";

const Query = ({ setReviews, category }) => {
    const [sortTerm, setSortTerm] = useState("created_at");
    const [orderTerm, setOrderTerm] = useState("asc");
    const [limitTerm, setLimitTerm] = useState(100);
    const [titleTerm, setTitleTerm] = useState("");

    const handleQuery = () => {
        getQueriedReviews(sortTerm, orderTerm, limitTerm).then((result) => {
            if (titleTerm !== "") {
                result = result.filter((item) =>
                    item.title.toLowerCase().includes(titleTerm.toLowerCase())
                );
            }
            if (category) {
                result = result.filter((item) => item.category === category);
            }
            setReviews(result);
        });
    };

    return (
        <div className="query">
            <h2>Latest Reviews</h2>
            <div className="query__items">
                <SortBy setSortTerm={setSortTerm} sortTerm={sortTerm} />
                <OrderBy setOrderTerm={setOrderTerm} />
                <LimitResults setLimitTerm={setLimitTerm} />
                <Search setTitleTerm={setTitleTerm} />
                <button onClick={handleQuery}>Submit</button>
            </div>
        </div>
    );
};

export default Query;

// SELECT reviews.review_id, title, review_body, designer,
// review_img_url, reviews.votes, category, owner, reviews.created_at,
// COUNT(comments.comment_id) AS comment_count
