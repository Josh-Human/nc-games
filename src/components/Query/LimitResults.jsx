const LimitResults = ({ setLimitTerm }) => {
    return (
        <div>
            <select
                onChange={(e) => {
                    setLimitTerm(e.target.value);
                }}
            >
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
