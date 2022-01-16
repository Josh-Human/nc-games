import BasicReview from "../BasicReview";
import Query from "../Query/Query";
import "../css/Categories.css";
import { useEffect, useState } from "react";
import { getQueriedReviews, getCategories } from "../../utils/api";
import { GridLoader } from "react-spinners";

const Categories = ({ reviews, setReviewId, setReviews }) => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
    const [isReviewsLoading, setIsReviewsLoading] = useState(true);

    useEffect(() => {
        setIsCategoriesLoading(true);
        getCategories().then((result) => {
            setCategories(result);
            setIsCategoriesLoading(false);
        });
        setReviews([]);
    }, []);

    const handleClick = (event) => {
        setIsReviewsLoading(true);
        setCategory(event.target.innerText.toLowerCase());
        getQueriedReviews().then((result) => {
            setReviews(
                result.filter(
                    (item) =>
                        item.category === event.target.innerText.toLowerCase()
                )
            );

            setIsReviewsLoading(false);
        });
    };

    return (
        <div className="reviews">
            <div className="categories__bar">
                {isCategoriesLoading ? (
                    <GridLoader />
                ) : (
                    <ul className="cateories__bar__items">
                        {categories.map((category) => {
                            return (
                                <li key={category.slug} onClick={handleClick}>
                                    {category.slug.toUpperCase()}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            <div className="categories__query">
                <Query setReviews={setReviews} category={category} />
            </div>
            {reviews.length < 1 ? (
                "No reviews in this category."
            ) : isReviewsLoading ? (
                <GridLoader />
            ) : (
                <div className="reviews__container">
                    <BasicReview reviews={reviews} setReviewId={setReviewId} />
                </div>
            )}
        </div>
    );
};
export default Categories;
