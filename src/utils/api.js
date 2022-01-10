import axios from "axios";

const gameApi = axios.create({
    baseURL: "https://northgames-joshh.herokuapp.com/api",
});

export const getAllReviews = () => {
    return gameApi.get("/reviews").then((response) => {
        return response.data.reviews;
    });
};
