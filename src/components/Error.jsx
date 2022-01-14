import "./css/Error.css";

const Error = ({ response }) => {
    return (
        <>
            <h3>This is an error page</h3>
            {!response ? (
                <p>404 That url does not exist</p>
            ) : (
                <p>
                    {response.status}
                    <br></br>
                    {response.statusText}
                </p>
            )}
        </>
    );
};
export default Error;
