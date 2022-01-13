import { useState } from "react";

const SortBy = ({ setSortTerm, sortTerm }) => {
    const [displayText, setDisplayText] = useState("Sort By");

    function toggleDropList() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches(".dropbtn")) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show");
                }
            }
        }
    };

    const handleSort = (event) => {
        setDisplayText(event.target.innerHTML);

        let buttonText = event.target.innerText.toLowerCase();

        if (buttonText === "date") {
            setSortTerm("created_at");
        } else if (buttonText === "comment count") {
            setSortTerm("comment_count");
        } else {
            setSortTerm(buttonText);
        }
    };

    return (
        <div className="dropdown">
            <button
                id="displayed-name"
                className="dropbtn"
                onClick={toggleDropList}
            >
                {displayText}
            </button>
            <div id="myDropdown" className="dropdown-content">
                <button onClick={handleSort}>Title</button>
                <button onClick={handleSort}>Date</button>
                <button onClick={handleSort}>Votes</button>
                <button onClick={handleSort}>Category</button>
                <button onClick={handleSort}>Owner</button>
            </div>
        </div>
    );
};
export default SortBy;
