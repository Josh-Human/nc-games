import { useState } from "react";

const Search = ({ setTitleTerm }) => {
    const [titleBox, setTitleBox] = useState("Search for a title...");

    const handleTitle = (event) => {
        setTitleBox(event.target.value);

        setTitleTerm(event.target.value);
    };
    return (
        <div>
            <input
                type="text"
                onChange={handleTitle}
                value={titleBox}
                onFocus={() => {
                    setTitleBox("");
                }}
            ></input>
        </div>
    );
};

export default Search;
