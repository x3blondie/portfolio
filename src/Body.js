import React from "react";

import { Link } from "react-router-dom";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      <div className="body-container">
        {/* <img
          className="profile-image"
          src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        /> */}

        <div className="body__content">
          <h1>Hello, I'm Jennifer</h1>
          <p>
            I'm a web developer based in the Chicago area. I have 7+ year
            experince as a web developer in the B2B marketing space. I can help
            your business get more leads!
          </p>

          <Link to="/portfolio">
            <button className="portfolio-btn">View Portfolio</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Body;
