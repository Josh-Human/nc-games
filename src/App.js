import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reviews from "./components/Reviews";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Reviews />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
