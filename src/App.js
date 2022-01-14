import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reviews from "./components/Reviews/Reviews.jsx";
import Review from "./components/Review/Review.jsx";
import Profile from "./components/Profile.jsx";
import { useState } from "react";
import Categories from "./components/Categories/Categories";
import Error from "./components/Error.jsx";

function App() {
    const [username, setUsername] = useState("cooljmessy");
    const [reviews, setReviews] = useState([]);
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar username={username} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Reviews
                                reviews={reviews}
                                setReviews={setReviews}
                            />
                        }
                    />
                    <Route
                        path="/profile"
                        element={<Profile username={username} />}
                    />
                    <Route
                        path={`/review/:reviewId`}
                        element={
                            <Review
                                username={username}
                                setReviews={setReviews}
                            />
                        }
                    />
                    <Route
                        path="/categories"
                        element={
                            <Categories
                                reviews={reviews}
                                setReviews={setReviews}
                            />
                        }
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
