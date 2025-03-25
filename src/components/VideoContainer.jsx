/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_API_URL } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    dispatch(closeMenu());
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API_URL);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  if (videos.length === 0)
    return (
      <div className="flex justify-center items-center h-96 text-gray-600">
        No videos found
      </div>
    );

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isMenuOpen ? "ml-60" : "ml-0"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div key={video?.id || index} className="flex justify-center">
              <Link to={"/watch?v=" + video.id}>
                <VideoCard info={video} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
