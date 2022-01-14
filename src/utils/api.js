import axios from "axios";

const gameApi = axios.create({
    baseURL: "https://northgames-joshh.herokuapp.com/api",
});

export const getAllReviews = () => {
    return gameApi.get("/reviews").then((response) => {
        return response.data.reviews;
    });
};

export const getQueriedReviews = (
    sortTerm = "created_at",
    orderTerm = "asc",
    limitTerm = 100
) => {
    return gameApi
        .get(
            `/reviews?sort_by=${sortTerm}&order=${orderTerm}&limit=${limitTerm}`
        )
        .then((response) => {
            return response.data.reviews;
        });
};

export const getReview = (review_id) => {
    return gameApi.get(`/reviews/${review_id}`).then((res) => {
        return res.data.review;
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

export const getReviewComments = (reviewId) => {
    return gameApi.get(`/reviews/${reviewId}/comments`).then((response) => {
        return response.data.comments;
    });
};

export const patchCommentVote = (inc_votes, comment_id) => {
    return gameApi
        .patch(`/comments/${comment_id}`, { inc_votes })
        .then((response) => {
            return response.data.comments;
        });
};

export const postComment = (review_id, username, body) => {
    return gameApi
        .post(`/reviews/${review_id}/comments`, {
            username: username,
            body: body,
        })
        .then((response) => {
            return response.data.comment;
        });
};

export const deleteComment = (comment_id) => {
    return gameApi.delete(`/comments/${comment_id}`);
};

export const getCategories = () => {
    return gameApi.get("/categories").then((res) => {
        return res.data.categories;
    });
};
