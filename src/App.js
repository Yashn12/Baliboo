import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import BookTable from "./components/BookTable";
import ContactUs from "./components/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>
    </Router>
  );
};

export default App;
