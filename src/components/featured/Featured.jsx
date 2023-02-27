import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/skills?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>neighbour</span> to guide you!
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder="Teach me something new!"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Learn Guitar</button>
            <button>Spanish Lessons</button>
            <button>Shopify Website</button>
            <button>Growing Tomatoes</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/mman.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
