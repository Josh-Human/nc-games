import "./Query.css";

const Query = () => {
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
    };

    return (
        <>
            <h2>Latest Reviews</h2>
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
            <p>Order by</p>
            <p>Search ID</p>
            <p>Submit</p>
        </>
    );
};

export default Query;

// SELECT reviews.review_id, title, review_body, designer,
// review_img_url, reviews.votes, category, owner, reviews.created_at,
// COUNT(comments.comment_id) AS comment_count
