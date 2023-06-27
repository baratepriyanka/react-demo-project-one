import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import About from "./components/About";
import Contact from "./components/Contact";
// import Brand from "./components/Brand";
import Services from "./components/Services";
import "./style/app.scss";
import "./style/colors.scss";
import "./style/Header.scss";
import "./style/Home.scss";
import "./style/footer.scss";
import "./style/contact.scss";
import "./style/services.scss";
import "./style/responsive.scss";


function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route  path="/" element={<Home />}  />
      {/* <Route  path="/about" element={<About />}  /> */}
      <Route  path="/contact" element={<Contact />}  />
      <Route  path="/services" element={<Services />}  />
      {/* <Route  path="/brand" element={<Brand />}  /> */}

      
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
