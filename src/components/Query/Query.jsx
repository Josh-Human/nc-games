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
                <div className="query__items__rowA">
                    <SortBy setSortTerm={setSortTerm} />
                    <OrderBy setOrderTerm={setOrderTerm} />
                    <LimitResults setLimitTerm={setLimitTerm} />
                </div>

                <div className="query__items__rowB">
                    <Search
                        className="query__items__text"
                        setTitleTerm={setTitleTerm}
                    />
                    <button className="query__items__btn" onClick={handleQuery}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Query;
