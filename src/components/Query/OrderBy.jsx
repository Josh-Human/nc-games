const OrderBy = ({ setOrderTerm }) => {
    const handleOrder = (event) => {
        setOrderTerm(event.target.value);
    };

    return (
        <fieldset>
            <label htmlFor="asc">Ascending</label>
            <input
                type="radio"
                id="asc"
                value="asc"
                name="order"
                onClick={handleOrder}
            ></input>
            <label htmlFor="desc">Descending</label>
            <input
                type="radio"
                id="desc"
                value="desc"
                name="order"
                onClick={handleOrder}
            ></input>
        </fieldset>
    );
};
export default OrderBy;
