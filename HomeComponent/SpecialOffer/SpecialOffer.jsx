import React, { useState } from "react";
import { LuFilter } from "react-icons/lu";
import AdSection from "../HomeBody/AdSection";
import Aside from "../HomeBody/Aside";

const SpecialOffer = () => {
  const [aside, setAside] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState([0, Infinity]);

  const clickHandle = () => {
    setAside(!aside);
  };

  const products = [
    { src: "/Timing_light.jpg", name: "Timing light", price: 200 },
    { src: "/Angle_grinder.jpg", name: "Angle Grinder", price: 1200 },
    { src: "/Drill.jpg", name: "Drill", price: 2110 },
    { src: "/Test_light.jpg", name: "Test light", price: 2520 },
    { src: "/Multimeter.jpg", name: "Multimeter", price: 1200 },
    { src: "/Gloves.jpg", name: "Gloves", price: 260 },
    { src: "/wrench.jpg", name: "Wrench", price: 1720 },
    { src: "/wheel.webp", name: "Wheel", price: 22020 },
  ];

  // Suggestions for autocomplete
  const suggestions = products
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((product) => product.name)
    .sort((a, b) => a.localeCompare(b));

  // Filtering products based on search and price filter
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= priceFilter[0] &&
      product.price <= priceFilter[1]
  );

  const mainBarStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "15px",
    padding: "10px",
  };

  const sidebarStyle = {
    position: "fixed",
    top: "100px",
    left: aside ? "0" : "-250px",
    width: "250px",
    height: "100%",
    backgroundColor: "#f4f4f4",
    boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
    transition: "left 0.3s ease",
    padding: "15px",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar Toggle Button */}
      <button
        onClick={clickHandle}
        style={{
          padding: "0px",
          fontSize: "30px",
          backgroundColor: "transparent",
          borderColor: "transparent",
          position: "fixed",
          top: "70px",
        }}
      >
        <LuFilter />
      </button>

      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h3>Filter Options</h3>
        <label>
          Price Range:<br />
          <div>
            <label>
              <input
                type="radio"
                name="price"
                value="0-Infinity"
                onChange={(e) => setPriceFilter([0, Infinity])}
              />
              All
            </label><br />
            <label>
              <input
                type="radio"
                name="price"
                value="0-500"
                onChange={(e) => setPriceFilter([0, 500])}
              />
              0 - 500
            </label><br />
            <label>
              <input
                type="radio"
                name="price"
                value="501-2000"
                onChange={(e) => setPriceFilter([501, 2000])}
              />
              501 - 2000
            </label><br />
            <label>
              <input
                type="radio"
                name="price"
                value="2001-10000"
                onChange={(e) => setPriceFilter([2001, 10000])}
              />
              2001 - 10000
            </label><br />
            <label>
              <input
                type="radio"
                name="price"
                value="10001-Infinity"
                onChange={(e) => setPriceFilter([10001, Infinity])}
              />
              10001+
            </label>
          </div>
        </label>
      </div>

      <div style={{ marginLeft: aside ? "260px" : "10px", transition: "margin-left 0.3s ease" }}>
        <h1 style={{ textAlign: "center", padding: "15px" }}>Try These Amazing Products</h1>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "80%",
            padding: "10px",
            fontSize: "16px",
            margin: "10px auto",
            display: "block",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Suggestions Dropdown */}
        {searchTerm && suggestions.length > 0 && (
          <ul
            style={{
              width: "80%",
              margin: "10px auto",
              padding: "0",
              listStyle: "none",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              maxHeight: "150px",
              overflowY: "auto",
            }}
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => setSearchTerm(suggestion)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}

        {/* Products Grid */}
        <div style={mainBarStyle}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <AdSection
                key={index}
                src={product.src}
                name={product.name}
                price={product.price}
              />
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
