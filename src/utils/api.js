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

export const patchReviewVotes = (inc_votes, review_id) => {
    return gameApi
        .patch(`/reviews/${review_id}`, { inc_votes })
        .then((response) => {
            return response.data.review;
        });
};

export const getUser = (username) => {
    return gameApi.get(`/users/${username}`).then((response) => {
        return response.data.user;
    });
};
