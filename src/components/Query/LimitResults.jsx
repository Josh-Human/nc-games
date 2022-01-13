const LimitResults = ({ setLimitTerm }) => {
    const handleLimit = (event) => {
        setLimitTerm(event.target.value);
    };

    return (
        <div>
            <label htmlFor="limit">Number of results </label>
            <input
                type="number"
                id="limit"
                min="0"
                name="limit"
                onChange={handleLimit}
            ></input>
        </div>
    );
};
export default LimitResults;
