import React from 'react';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li>
      <img src={imgUrl} alt="video" />
      <div>{props.video.snippet.title}</div>
    </li>
    );
};

export default VideoListItem;
