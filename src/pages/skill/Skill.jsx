import React from "react";
import "./skill.scss";
import Slider from "infinite-react-carousel";

const Skill = () => {
  return (
    <div className="skill">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">Munity - Graphics &Design -</span>
          <h1>I will teach you how to create AI art</h1>
          <div className="user">
            <img src="" alt="" />
            <span>Caleb Tc</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1}>
            <img src="/img/gardening.jpg" alt="" />
          </Slider>
          <h2>About this skill</h2>
          <p>
            I use AI to create art. I will teach you how to use AI to create
            art.
          </p>
          <div className="seller">
            <h2>About the Guide</h2>
            <div className="user">
              <img src="/img/caleb-anime.png" alt="" />
              <div className="info">
                <span>Caleb Tc</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <div className="title">From</div>
                  <div className="desc">Fitzroy, Vic</div>
                </div>
                <div className="item">
                  <div className="title">Member since</div>
                  <div className="desc">Aug 2022</div>
                </div>
                <div className="item">
                  <div className="title">Avg. response time</div>
                  <div className="desc">4 hours</div>
                </div>
                <div className="item">
                  <div className="title">Last Meeting</div>
                  <div className="desc">1 day</div>
                </div>
                <div className="item">
                  <div className="title">Languages</div>
                  <div className="desc">English</div>
                </div>
                <hr />
                <p>
                  My name is Caleb, I enjoy creating ai generated art in my
                  spare time. I have a lot of experience using the AI program
                  and that means I know what to prompt the AI with to get a
                  great and incredibly detailed result.
                </p>
              </div>
            </div>
            <div className="reviews">
              <h2>Reviews</h2>
              <div className="item">
                <div className="user">
                  <img className="pp" src="/img/caleb-anime.png" alt="" />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>Australia</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  I just want to say that art_with_ai was the first, and after
                  this, the only artist Ill be using moving forward.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
