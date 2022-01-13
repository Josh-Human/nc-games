import { useState } from "react";

const LimitResults = ({ setLimitTerm }) => {
    const [limitDisplay, setLimitDisplay] = useState("# of results");
    const handleLimit = (event) => {
        setLimitDisplay(event.target.value);
        setLimitTerm(event.target.value);
    };

    return (
        <div>
            {/* <label htmlFor="limit"># of results </label>
            <input
                type="number"
                id="limit"
                min="0"
                name="limit"
                onChange={handleLimit}
            ></input> */}
            <select onChange={handleLimit}>
                <option value={100} hidden>
                    # of results
                </option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
            </select>
        </div>
    );
};
export default LimitResults;
