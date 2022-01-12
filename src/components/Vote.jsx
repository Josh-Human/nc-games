import { useState } from "react";
import { patchReviewVotes } from "../utils/api.js";

const Vote = ({ review, setReviews }) => {
    const [isIncDisabled, setIsIncDisabled] = useState(false);
    const [isDecDisabled, setIsDecDisabled] = useState(false);

    const handleVote = ({ target }) => {
        let inc_vote = 0;
        if (target.id === `${review.review_id}__inc`) {
            if (isDecDisabled) {
                review.votes--;
                inc_vote = -1;
                setIsDecDisabled(false);
            } else {
                review.votes++;
                inc_vote = 1;
                setIsDecDisabled(true);
            }
        } else {
            if (isIncDisabled) {
                review.votes++;
                inc_vote = 1;
                setIsIncDisabled(false);
            } else {
                review.votes--;
                inc_vote = -1;
                setIsIncDisabled(true);
            }
        }

        patchReviewVotes(inc_vote, review.review_id).catch(() => {
            inc_vote === 1 ? review.votes-- : review.votes++;
        });
    };

    return (
        <div>
            <button
                id={`${review.review_id}__inc`}
                onClick={handleVote}
                disabled={isIncDisabled}
            >
                +
            </button>
            <p>{review.votes}</p>
            <button
                id={`${review.review_id}__dec`}
                onClick={handleVote}
                disabled={isDecDisabled}
            >
                -
            </button>
        </div>
    );
};

export default Vote;
