import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./home.scss";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={2}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
