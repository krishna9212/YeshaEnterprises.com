import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Cursor from "./Components/Cursor";
import Home from "./Components/Home";
import MicroLoan from "./Components/MicroLoan";
import LoanCategories from "./Components/LoanCatagories";
import PersonalLoan from "./Components/PersonalLoan";
import BusinessLoan from "./Components/BusinessLoan";
import CreditCard from "./Components/CreditCard";
import HomeLoan from "./Components/HomeLoan";
import LoanAgainstProperty from "./Components/LoanAgainstProperty";
import UsedCarLoan from "./Components/UsedCarLoan";
import CarLoan from "./Components/CarLoan";
import ProductsPage from "./Components/ProductsPage";
import NotFound from "./Components/NotFound"; // Handles 404 errors
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
        {/* Fixed Navigation */}
        <header className="z-50">
          <Navigation />
        </header>

        {/* Dynamic Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/micro-loan" element={<MicroLoan />} />
            <Route path="/loan-categories" element={<LoanCategories />} />
            <Route path="/personal-loan" element={<PersonalLoan />} />
            <Route path="/business-loan" element={<BusinessLoan />} />
            <Route path="/credit-card" element={<CreditCard />} />
            <Route path="/home-loan" element={<HomeLoan />} />
            <Route path="/loan-against-property" element={<LoanAgainstProperty />} />
            <Route path="/used-car-loan" element={<UsedCarLoan />} />
            <Route path="/car-loan" element={<CarLoan />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Cursor (Hidden on Small Screens) */}
        <div className="hidden md:block">
          <Cursor />
        </div>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
