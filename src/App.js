import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reviews from "./components/Reviews";
import Review from "./components/Review";
import Profile from "./components/Profile";
import { useState } from "react";

function App() {
    const [username, setUsername] = useState("cooljmessy");
    const [reviewId, setReviewId] = useState(null);
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={<Reviews setReviewId={setReviewId} />}
                    />
                    <Route
                        path="/profile"
                        element={<Profile username={username} />}
                    />
                    <Route
                        path={`/review/${reviewId}`}
                        element={<Review reviewId={reviewId} />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
