const Search = ({ setTitleTerm }) => {
    const handleTitle = (event) => {
        setTitleTerm(event.target.value)
    };
    return (
        <div>
            <input type="text" onChange={handleTitle}></input>
        </div>
    );
};

export default Search;
