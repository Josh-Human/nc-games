import BasicReview from "../BasicReview";
import Query from "../Query/Query";
import "../css/Categories.css";
import { useEffect, useState } from "react";
import { getAllReviews, getCategories } from "../../utils/api";

const Categories = ({ reviews, setReviewId, setReviews }) => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    useEffect(() => {
        getCategories().then((result) => {
            setCategories(result);
        });
        setReviews([]);
    }, []);

    const handleClick = (event) => {
        getAllReviews().then((result) => {
            setReviews(
                result.filter(
                    (item) => item.category === event.target.innerText
                )
            );
        });
    };
    return (
        <div className="categories">
            <div className="categories__bar">
                <ul>
                    {categories.map((category) => {
                        return (
                            <li key={category.slug} onClick={handleClick}>
                                {category.slug}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Query setReviews={setReviews} />
            {console.log(categories.length)}
            {reviews.length < 1 ? (
                "No reviews in this category."
            ) : (
                <BasicReview
                    reviews={reviews}
                    setReviews={setReviews}
                    setReviewId={setReviewId}
                />
            )}
        </div>
    );
};
export default Categories;
