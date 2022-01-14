import BasicReview from "../BasicReview";
import Query from "../Query/Query";
import "../css/Categories.css";
import { useEffect, useState } from "react";
import { getAllReviews, getCategories } from "../../utils/api";
import { GridLoader } from "react-spinners";
// const RESULTS_PER_PAGE = 5;

const Categories = ({ reviews, setReviewId, setReviews }) => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
    const [isReviewsLoading, setIsReviewsLoading] = useState(true);
    // const [currPage, setCurrPage] = useState(0);

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
        getAllReviews().then((result) => {
            setReviews(
                result.filter(
                    (item) =>
                        item.category === event.target.innerText.toLowerCase()
                )
            );

            setIsReviewsLoading(false);
        });
    };

    // useEffect(() => {
    //     setReviews((currReviews) => {
    //         return currReviews.slice(
    //             currPage * RESULTS_PER_PAGE,
    //             (currPage + 1) * RESULTS_PER_PAGE
    //         );
    //     });
    // }, [currPage]);
    return (
        <div className="categories">
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
                    <BasicReview
                        reviews={reviews}
                        setReviews={setReviews}
                        setReviewId={setReviewId}
                    />
                    {/* <button
                        onClick={() => {
                            setCurrPage(currPage - 1);
                        }}
                        disabled={currPage === 0}
                    >
                        Back
                    </button>
                    <button
                        onClick={() => {
                            setCurrPage(currPage + 1);
                        }}
                        disabled={
                            (currPage + 1) * RESULTS_PER_PAGE >= reviews.length
                        }
                    >
                        Next
                    </button> */}
                </div>
            )}
        </div>
    );
};
export default Categories;
