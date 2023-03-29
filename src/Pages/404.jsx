import React from "react";
import { Link } from "react-router-dom";
import Car from "../Assets/images/car.png";
import Homepage from "../Assets/images/backToTheHomepage.webp";

const NotFound = () => {
  return (
    <section class="notFound">
      <div class="img">
        <img src={Homepage} alt="Back to the Homepage" />
        <img src={Car} alt="Car" />
      </div>
      <div class="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>

        <Link to="games-list" class="link_404">
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
