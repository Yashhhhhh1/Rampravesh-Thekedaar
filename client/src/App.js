import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import CreateBlog from "./Components/CreateBlog/CreateBlog";
import Blog from "./Pages/Blog/Blog";
import BlogPreview from "./Pages/BlogPreview/BlogPreview";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogPreview />} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
