import React from "react";

const VideoTitle = ({ title, overview, movie_id }) => {
  console.log(title + ": " + movie_id);
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-24 text-white bg-gradient-to-r from-gray-800">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="px-12 py-3 bg-white text-black text-lg rounded-lg shadow-md hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="px-8 py-3 mx-2 bg-gray-500 text-white text-lg rounded-lg shadow-md hover:bg-opacity-80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
