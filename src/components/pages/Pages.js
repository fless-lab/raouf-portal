import React from "react";
import { Header } from "../common/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/home"
import About from "../about/about"
import Pricing from "../pricing/pricing"
import Blog from "../blog/blog"
import Services from "../services/services"
import Contact from "../contact/contact"
import Footer from "../common/footer/footer"
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/blog' element={<Blog/>} />
          {/* <Route exact path='/pricing' element={<Pricing/>} /> */}
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
