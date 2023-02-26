import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: "Caleb",
    isGuide: true,
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">Munity</span>
          <span className="dot">.</span>
          {/* </Link> */}
        </div>
        <div className="links">
          <div>About Munity</div>
          <div>Explore</div>
          <div>English</div>
          <div>Share a Skill</div>
          <div>Sign In</div>
          {!currentUser?.isGuide && <span>Become a Guide</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="/img/caleb-anime.png" alt="" />
              <span>{currentUser.userName}</span>
              {open && (
                <div className="options">
                  {currentUser?.isGuide && (
                    <>
                      <span>Skills</span>
                      <span>Add New Skill</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>test1</span>
            <span>test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
