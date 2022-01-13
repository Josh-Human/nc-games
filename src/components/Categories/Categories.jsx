import BasicReview from "../BasicReview";
import Query from "../Query/Query";
import "../css/Categories.css";
import { useEffect, useState } from "react";
import { getAllReviews, getCategories } from "../../utils/api";
import { GridLoader } from "react-spinners";

const Categories = ({ reviews, setReviewId, setReviews }) => {
    const [categories, setCategories] = useState([]);
    // const [category, setCategory] = useState(null);
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
        getAllReviews().then((result) => {
            setReviews(
                result.filter(
                    (item) => item.category === event.target.innerText
                )
            );
            setIsReviewsLoading(false);
        });
    };
    return (
        <div className="categories">
            <div className="categories__bar">
                {isCategoriesLoading ? (
                    <GridLoader />
                ) : (
                    <ul>
                        {categories.map((category) => {
                            return (
                                <li key={category.slug} onClick={handleClick}>
                                    {category.slug}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            <Query setReviews={setReviews} />
            {reviews.length < 1 ? (
                "No reviews in this category."
            ) : isReviewsLoading ? (
                <GridLoader />
            ) : (
                <div className="reviews__container">
                    <BasicReview
                        reviews={reviews}
                        setReviews={setReviews}
                        setReviewId={setReviewId}
                    />
                </div>
            )}
        </div>
    );
};
export default Categories;
