const OrderBy = ({ setOrderTerm }) => {
    const handleOrder = (event) => {
        setOrderTerm(event.target.value);
    };

    return (
        <fieldset>
            <label htmlFor="asc">Asc</label>
            <input
                type="radio"
                id="asc"
                value="asc"
                name="order"
                onClick={handleOrder}
            ></input>
            <label htmlFor="desc">Desc</label>
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
