const Vote = ({ review, setReviews }) => {
    const handleVote = ({ target: { innerText } }) => {
        setReviews((currReviews) => {
            const newReviews = currReviews.map((currReview) => {
                if (currReview.review_id === review.review_id) {
                    currReview.votes = review.votes;
                }
                return currReview;
            });
            console.log("test");
            return newReviews;
        });
    };

    return (
        <div>
            <button onClick={handleVote}>+</button>
            <p>{review.votes}</p>
            <button onClick={handleVote}>-</button>
        </div>
    );
};

export default Vote;
