import React from "react";
import "./VideoItem.css";

const VideoItem = props => {
  const onVideoClick = () => {
    props.onVideoSelect(props.video);
  };

  return (
    <div onClick={onVideoClick} className="video-item item">
      <img
        className="ui image"
        alt="thumbnail"
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
