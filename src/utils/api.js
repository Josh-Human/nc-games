import axios from "axios";

const gameApi = axios.create({
    baseURL: "https://northgames-joshh.herokuapp.com/api",
});

export const getAllReviews = () => {
    return gameApi.get("/reviews").then((response) => {
        return response.data.reviews;
    });
};

export const getQueriedReviews = (sortTerm, orderTerm, limitTerm) => {
    return gameApi
        .get(
            `/reviews?sort_by=${sortTerm}&order=${orderTerm}&limit=${limitTerm}`
        )
        .then((response) => {
            return response.data.reviews;
        });
};
