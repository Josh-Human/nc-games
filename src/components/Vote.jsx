import { useState } from "react";
import { patchCommentVote, patchReviewVotes } from "../utils/api.js";

const Vote = ({ item, itemStr }) => {
    const [isIncDisabled, setIsIncDisabled] = useState(false);
    const [isDecDisabled, setIsDecDisabled] = useState(false);

    const handleVote = ({ target }) => {
        let inc_vote = 0;
        if (target.id === `${item[`${itemStr}_id`]}__inc`) {
            if (isDecDisabled) {
                item.votes--;
                inc_vote = -1;
                setIsDecDisabled(false);
            } else {
                item.votes++;
                inc_vote = 1;
                setIsDecDisabled(true);
            }
        } else {
            if (isIncDisabled) {
                item.votes++;
                inc_vote = 1;
                setIsIncDisabled(false);
            } else {
                item.votes--;
                inc_vote = -1;
                setIsIncDisabled(true);
            }
        }
        if (itemStr === "review") {
            patchReviewVotes(inc_vote, item[`${itemStr}_id`]).catch(() => {
                inc_vote === 1 ? item.votes-- : item.votes++;
            });
        } else {
            patchCommentVote(inc_vote, item[`${itemStr}_id`]).catch(() => {
                inc_vote === 1 ? item.votes-- : item.votes++;
            });
        }
    };

    return (
        <div>
            <button
                id={`${item[`${itemStr}_id`]}__inc`}
                onClick={handleVote}
                disabled={isIncDisabled}
            >
                +
            </button>
            <p>{item.votes}</p>
            <button
                id={`${item[`${itemStr}_id`]}__dec`}
                onClick={handleVote}
                disabled={isDecDisabled}
            >
                -
            </button>
        </div>
    );
};

export default Vote;
