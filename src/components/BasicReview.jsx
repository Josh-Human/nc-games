const BasicReview = ({ reviews }) => {
    return (
        <ul>
            {reviews.map((review) => {
                return (
                    <li key={review.review_id}>
                        <p>{review.title}</p>
                        <img src={review.review_img_url}></img>
                        <p>{review.author}</p>
                        <p>{review.created_at}</p>
                        <p>{review.category}</p>
                        <p>{review.votes}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default BasicReview;
