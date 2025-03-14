import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Shop from "../components/Shop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Login from "../components/Login";
import Dogshop from "../components/Dogshop";
import Contact from "../components/Contact";
import CatShop from "../components/CatShop";
import Birdshop from "../components/Birdshop";
import Fishshop from "../components/Fishshop";
import Cart from "../components/Cart";

const AppRoute = _ => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
    <Route path="/dogshop" element={<Dogshop/>}/>
    <Route path="/catshop" element={<CatShop/>}/>
    <Route path="/birdshop" element={<Birdshop/>}/>
    <Route path="/fishshop" element={<Fishshop/>}/>
<Route path="/cart" element={<Cart/>}/>

        </Routes>
        <Footer />
    </Router>
);
export default AppRoute;