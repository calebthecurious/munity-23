import React, { useState } from "react";
import "./skills.scss";

import { skills } from "../../data";
import SkillCard from "../../components/skillCard/SkillCard";

const Skills = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="skills">
      <div className="container">
        <div className="breadcrumbs">MUNITY > GRAPHICS & DESIGN ></div>
        <h1>AI Design</h1>
        <p>
          Explore the boundaries of art and technology with local AI experts
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {skills.map((skill) => (
            <SkillCard key={skill.id} item={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
