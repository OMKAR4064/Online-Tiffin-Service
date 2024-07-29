import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { FoodAddForm } from "./adminOpration/foodDataAdd";
import { LoginForm } from "./components/Layouts/Login";
import Header from "./components/Layouts/Header";
import Subscription from "./components/Layouts/Subscription";
import Footer from "./components/Layouts/Footer";
import { AboutUs } from "./components/Layouts/AboutUs";
import { SignupForm } from "./components/Layouts/SignUp";


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addFood" element={<FoodAddForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/subsciption" element={<Subscription />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignupForm/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
