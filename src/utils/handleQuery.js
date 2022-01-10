export const handleQuery = (event, setReviews) => {
    document.getElementById("displayed-name").innerHTML =
        event.target.innerHTML;
    let searchTerm = event.target.innerText.toLowerCase();

    if (searchTerm === "date") {
        searchTerm = "created_at";
    } else if (searchTerm === "comment count") {
        searchTerm = "created_at";
    }

    getQueriedReviews(searchTerm).then((result) => {
        setReviews(result);
    });
};
