import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShowProfile from "./ShowProfile.jsx";
import AboutMe from "./AboutMe.jsx";
import MyProjects from "./MyProjects.jsx";
import MyContacts from "./myContacts.jsx";
import "./index.css";

function App() {
    return (
        <BrowserRouter>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/aboutMe">About Me</Link>
                <Link to="/myprojects">My Projects</Link>
                <Link to="/mycontacts">My Contacts</Link>
            </nav>

            <Routes>
                <Route path="/" element={<ShowProfile />} />
                <Route path="/aboutMe" element={<AboutMe />} />
                <Route path="/myprojects" element={<MyProjects />} />
                <Route path="/mycontacts" element={<MyContacts />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App