import { Routes, Route } from "react-router";
import Home from "../components/Home";
import Login from "../components/Login";
import About from "../components/About";
import Contact from "../components/Contact";
import Signin from "../components/signin";
import Linkedin from "../components/linkedin";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/linkedin" element={<Linkedin />} />
      </Routes>
    </div>
  );
};

export default Routing;
