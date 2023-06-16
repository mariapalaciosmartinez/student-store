import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Search from "../Search/Search";
import Subnavbar from "../Subnavbar/subnavbar";

export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store"; //api url

  const [products, setProducts] = useState([]); //a products list to be edited with setProducts

  //a products list to be accessed when needed(needed when new search wants to be made)
  // const [setOriginalProducts, setOriginalProducts] = useState(); //a products list to be accessed when needed(needed when new search wants to be made)
  // const setOriginalProducts = () => {
  //   setOriginalProducts(response.data.products);
  // }

  const handleClick = (category) => {
    setProducts(
      products?.filter((product) => product.category.includes(category))
    );
  };

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <main>
            <Navbar />
            <Sidebar />
            <Hero />
            <Subnavbar products={products} searchTerm={searchTerm} />
            <Home products={products} />
            <nav className="sub-navbar">
              <div className="content">
                <div className="row">
                  <div className="search-bar">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <i className="material-icons">search</i>
                  </div>
                  <div className="links">
                    <span className="help">
                      <i className="material-icons">help</i>Help
                    </span>
                    <div className="cart">
                      <a href="/">
                        My Cart<i className="material-icons">shopping_cart</i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="hamburger-menu">
                    <i className="material-icons">menu</i>
                  </div>
                  <ul className="category-menu open">
                    <li className="is-active">
                      <button>All Categories</button>
                    </li>
                    <li className="">
                      <button onClick={() => handleClick("clothing")}>
                        clothing
                      </button>
                    </li>
                    <li className="">
                      <button onClick={() => handleClick("food")}>food</button>
                    </li>
                    <li className="">
                      <button onClick={() => handleClick("accessories")}>
                        accessories
                      </button>
                    </li>
                    <li className="">
                      <button onClick={() => handleClick("tech")}>tech</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div>
              
            </div>
            <About></About>
            <Footer></Footer>
          </main>
        </BrowserRouter>
      </div>
      <aside></aside>
    </>
  );
}
