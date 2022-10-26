import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import AllBooks from "./components/pages/AllBooks";
library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt
);
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" element={<AllBooks />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
