import React from "react";

const VideoTitle = ({ title, overview, movie_id }) => {
  console.log(title + ": " + movie_id);
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="px-12 py-3 bg-white text-black text-lg rounded-lg bg-opacity-50 shadow-md">
          ▶️ Play
        </button>
        <button className="px-8 py-3 mx-2 bg-white text-black text-lg rounded-lg bg-opacity-50 shadow-md">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
