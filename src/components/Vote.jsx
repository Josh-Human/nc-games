import { useState } from "react";

const Vote = ({ review, setReviews }) => {
    const [isIncDisabled, setIsIncDisabled] = useState(false);
    const [isDecDisabled, setIsDecDisabled] = useState(false);
    // if patch fails catch and do opposite

    // if clicked again do opposite and enable other button
    //      - then decrease and reenable other

    const handleVote = ({ target }) => {
        if (target.id === `${review.review_id}__inc`) {
            if (isDecDisabled) {
                review.votes--;
                console.log(review.votes);
                setIsDecDisabled(false);
                document.getElementById(
                    `${review.review_id}__dec`
                ).disabled = false;
            } else {
                review.votes++;
                setIsDecDisabled(true);
                document.getElementById(
                    `${review.review_id}__dec`
                ).disabled = true;
            }
        } else {
            if (isIncDisabled) {
                review.votes++;
                setIsIncDisabled(false);
                document.getElementById(
                    `${review.review_id}__inc`
                ).disabled = false;
            } else {
                review.votes--;

                setIsIncDisabled(true);
                document.getElementById(
                    `${review.review_id}__inc`
                ).disabled = true;
            }
        }
        // occurs after successful patch
        setReviews((currReviews) => {
            const newReviews = currReviews.map((currReview) => {
                if (currReview.review_id === review.review_id) {
                    currReview.votes = review.votes;
                }
                return currReview;
            });

            return newReviews;
        });
    };

    return (
        <div>
            <button id={`${review.review_id}__inc`} onClick={handleVote}>
                +
            </button>
            <p>{review.votes}</p>
            <button id={`${review.review_id}__dec`} onClick={handleVote}>
                -
            </button>
        </div>
    );
};

export default Vote;
