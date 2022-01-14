import { useEffect, useState } from "react";
import { patchVotes } from "../utils/api.js";

const Vote = ({ item, itemStr }) => {
    const [voteChange, setVoteChange] = useState(0);

    useEffect(() => {
        if (voteChange !== 0) {
            patchVotes(voteChange, item[`${itemStr}_id`], itemStr + "s").catch(
                () => {
                    voteChange === 1 ? setVoteChange(-1) : setVoteChange(1);
                }
            );
        }
    }, [voteChange, item, itemStr]);

    return (
        <div>
            <button
                id={`${item[`${itemStr}_id`]}__inc`}
                onClick={(event) => {
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
