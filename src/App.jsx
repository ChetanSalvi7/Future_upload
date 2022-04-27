import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Footer";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Products from "./Products";
import Quiz from "./Quiz";
import Testimonials from "./Testimonials";
import Videos from "./Videos";
import WhyChooseUs from "./WhyChooseUs";
import "./index.css";
import Articles from "./Articles";
import Contactus from "./Contactus";


const App = () => {
    return (
        <>
        {<Home />}
        {<Aboutme />}
        {<Products />}
        {<WhyChooseUs />}
        {<Testimonials />}
        {<Quiz />}
        {<Videos />}
        {<Articles />}
        {<Contactus />}
        {<Footer />}
        </>

        

    );
};

export default App;