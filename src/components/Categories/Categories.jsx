import BasicReview from "../BasicReview";
import Query from "../Query/Query";
import "../css/Categories.css";
import { useEffect, useState } from "react";
import { getCategories } from "../../utils/api";

const Categories = ({ reviews, setReviewId, setReviews }) => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        getCategories().then((result) => {
            setCategories(result);
        });
    }, []);

    const handleClick = (event) => {
        console.log("tets");
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
            <BasicReview
                reviews={reviews}
                setReviews={setReviews}
                setReviewId={setReviewId}
            />
        </div>
    );
};
export default Categories;
