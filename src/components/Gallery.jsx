import React from "react";
import "./Gallery.css";
import Profile from "./Profile";

const Gallery = () => {
  return (
    <>
      <h1>Best scientists</h1>
      <div className="gallery-container">
        <Profile />
        <Profile />
        <Profile />
      </div>
      <ul
        style={{
          backgroundColor: "black",
          color: "red",
        }}
      >
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
};

export default Gallery;
