import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;

  // Guard against undefined properties
  if (!snippet || !statistics) {
    console.error("Missing required data in video info:", info);
    return null;
  }

  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  // Format view count similar to YouTube
  const formatViewCount = (count) => {
    if (!count) return "0 views";

    const num = parseInt(count);
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M views";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K views";
    } else {
      return num + " views";
    }
  };

  // Format the published date (e.g., "2 weeks ago")
  const formatPublishedDate = (dateString) => {
    const published = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - published) / 1000);

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;

    if (diffInSeconds < minute * 60) {
      const minutes = Math.floor(diffInSeconds / minute);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < day) {
      const hours = Math.floor(diffInSeconds / hour);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < week) {
      const days = Math.floor(diffInSeconds / day);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < month) {
      const weeks = Math.floor(diffInSeconds / week);
      return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < year) {
      const months = Math.floor(diffInSeconds / month);
      return `${months} month${months !== 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(diffInSeconds / year);
      return `${years} year${years !== 1 ? "s" : ""} ago`;
    }
  };

  return (
    <div className="w-full max-w-xs bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Thumbnail container with fixed aspect ratio */}
      <div className="relative w-full pb-[56.25%]">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Video info container */}
      <div className="p-3 flex">
        {/* Channel icon */}
        <div className="mr-3 flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
            {channelTitle.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Title and video info */}
        <div className="flex-grow overflow-hidden">
          {/* Video title - max 2 lines with ellipsis */}
          <h3 className="font-semibold text-sm mb-1 line-clamp-2 overflow-hidden">
            {title}
          </h3>

          {/* Channel name */}
          <p className="text-xs text-gray-600 mb-1">{channelTitle}</p>

          {/* View count and date */}
          <p className="text-xs text-gray-600">
            {formatViewCount(statistics.viewCount)} •{" "}
            {formatPublishedDate(publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
