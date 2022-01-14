import { useState } from "react";

const SortBy = ({ setSortTerm }) => {
    return (
        <div className="dropdown">
            <select
                onChange={(e) => {
                    setSortTerm(e.target.value);
                }}
            >
                <option value={"created_at"} hidden>
                    Sort By
                </option>
                <option value={"title"}>Title</option>
                <option value={"created_at"}>Date</option>
                <option value={"votes"}>Votes</option>
                <option value={"category"}>Category</option>
                <option value={"owner"}>Author</option>
            </select>
        </div>
    );
};
export default SortBy;
