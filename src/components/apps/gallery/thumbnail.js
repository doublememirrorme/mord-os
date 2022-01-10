import React from "react";
import "./thumbnail.sass";

const Thumbnail = ({ thumbnailUrl, title, url, onClick }) => {
  const handleClick = () => onClick({ thumbnailUrl, title, url });

  return (
    <img
      className="thumbnail"
      onClick={handleClick}
      src={thumbnailUrl}
      alt={title}
    />
  );
};

export default Thumbnail;
