const SortBy = ({ setSortTerm, sortTerm }) => {
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
        document.getElementById("displayed-name").innerHTML =
            event.target.innerHTML;

        let buttonText = event.target.innerText.toLowerCase();

        if (buttonText === "date") {
            setSortTerm("created_at");
        } else if (buttonText === "comment count") {
            setSortTerm("created_at");
        } else {
            setSortTerm(buttonText);
        }
    };
    // create a list of factors to sort by and pass to query
    // removes category from category reviews page later
    // hooks?

    return (
        <div className="dropdown">
            <button
                id="displayed-name"
                className="dropbtn"
                onClick={toggleDropList}
            >
                Sort By
            </button>
            <div id="myDropdown" className="dropdown-content">
                <button onClick={handleSort}>Title</button>
                <button onClick={handleSort}>Date</button>
                <button onClick={handleSort}>Votes</button>
                <button onClick={handleSort}>Category</button>
                <button onClick={handleSort}>Owner</button>
                <button onClick={handleSort}>Comment Count</button>
            </div>
        </div>
    );
};
export default SortBy;
