import { useState } from "react";
import {
    patchCommentVote,
    patchReviewVotes,
    patchVotes,
} from "../utils/api.js";

const Vote = ({ item, itemStr }) => {
    const [voteChange, setVoteChange] = useState(0);

    const handleVote = ({ target }) => {
        let inc_vote = 0;
        if (target.id === `${item[`${itemStr}_id`]}__inc`) {
            inc_vote = 1;
        } else {
            inc_vote = -1;
        }
        patchVotes(inc_vote, item[`${itemStr}_id`], itemStr + "s").catch(() => {
            inc_vote === 1 ? setVoteChange(-1) : setVoteChange(1);
        });
    };

    return (
        <div>
            <button
                id={`${item[`${itemStr}_id`]}__inc`}
                onClick={(event) => {
                    handleVote(event);
                    setVoteChange(1);
                }}
                disabled={voteChange === 1}
            >
                +
            </button>
            <p>{String(item.votes + voteChange)}</p>
            <button
                id={`${item[`${itemStr}_id`]}__dec`}
                onClick={(event) => {
                    handleVote(event);
                    setVoteChange(-1);
                }}
                disabled={voteChange === -1}
            >
                -
            </button>
        </div>
    );
};

export default Vote;
