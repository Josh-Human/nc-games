const BasicReview = ({ reviews }) => {
    return (
        <ul>
            {reviews.map((review) => {
                return (
                    <li key={review.review_id}>
                        <p>{review.title}</p>
                        <img src={review.review_img_url}></img>
                        <p>{review.owner}</p>
                        <p>{review.created_at}</p>
                        <p>{review.category}</p>
                        <p>{review.votes}</p>
                        <p>{review.comment_count}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default BasicReview;
