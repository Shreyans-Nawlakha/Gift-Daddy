import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// gift_daddy\src\images

function Rout() {
  return (
    <>
      <Router>
        <div className="px-3 py-2 bg-purple-500 text-white grid">
        <img src="./images/logo.png" alt="logo" className="w-[3rem]"/>
          <ul className="flex justify-evenly">
            <li className="mx-4 ">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4 ">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-4 ">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Rout;