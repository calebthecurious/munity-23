import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const { pathname } = useLocation();

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
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Munity</span>
            <span className="dot">.</span>
          </Link>
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
                      <Link className="link" to="/mySkills">
                        Skills
                      </Link>
                      <Link className="link" to="/add">
                        Add New Skill
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link">test1</Link>
            <Link className="link">test2</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
