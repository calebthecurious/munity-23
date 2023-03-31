import Reaact from "react";
import { Link } from "react-router-dom";
import "./message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <div className="breadcrumbs">
          <span className="messages">
            <Link to="/messages">Messages </Link>> CTC >
          </span>
          <div className="messages"></div>
          <div className="write"></div>
        </div>
      </div>
    </div>
  );
};
