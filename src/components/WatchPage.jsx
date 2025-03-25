// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { closeMenu } from "../utils/appSlice";
// import { useSearchParams } from "react-router-dom";
// import {
//   FaThumbsUp,
//   FaThumbsDown,
//   FaShare,
//   FaDownload,
//   FaEllipsisH,
// } from "react-icons/fa";
// import LiveChat from "../components/LiveChat";

// const WatchPage = () => {
//   const dispatch = useDispatch();
//   const [searchParams] = useSearchParams();
//   const videoId = searchParams.get("v");
//   const [loading, setLoading] = useState(true);
//   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

//   useEffect(() => {
//     // Note: You might want to decide if you want to unconditionally close the menu
//     // on the watch page or allow it to be open. If you want to always close it,
//     // keep this, otherwise remove it.
//     dispatch(closeMenu());
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className={`transition-all duration-300 ease-in-out ${
//         isMenuOpen ? "ml-60" : "ml-0"
//       } px-5 pt-20 pb-8 md:px-14 lg:px-20 bg-white`}
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left side - Video player and info */}
//         <div className="lg:col-span-2">
//           {/* Video player */}
//           <div className="w-full aspect-video bg-black">
//             <iframe
//               className="w-full h-full"
//               src={`https://www.youtube.com/embed/${videoId}`}
//               title="YouTube video player"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//             ></iframe>
//           </div>

//           {/* Rest of the component remains the same... */}
//           <h1 className="text-xl font-bold mt-4 text-black">
//             Pakistan Tour Of New Zealand | Highlights | 1st T20I
//           </h1>

//           {/* Video stats and actions */}
//           <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 pb-3 border-b border-gray-200">
//             {/* Channel info */}
//             <div className="flex items-center mb-3 sm:mb-0">
//               <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
//               <div className="ml-3">
//                 <p className="font-medium text-black">Cricket New Zealand</p>
//                 <p className="text-sm text-gray-600">2.5M subscribers</p>
//               </div>
//               <button className="ml-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full px-4 py-2 text-sm">
//                 Subscribe
//               </button>
//             </div>

//             {/* Action buttons */}
//             <div className="flex items-center space-x-2 mt-2 sm:mt-0">
//               <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-full px-4 py-2 text-sm">
//                 <FaThumbsUp className="mr-2" /> 45K
//               </button>
//               <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-full px-4 py-2 text-sm">
//                 <FaThumbsDown className="mr-2" />
//               </button>
//               <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-full px-4 py-2 text-sm">
//                 <FaShare className="mr-2" /> Share
//               </button>
//               <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-full px-4 py-2 text-sm">
//                 <FaDownload className="mr-2" /> Download
//               </button>
//               <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-full p-2 text-sm">
//                 <FaEllipsisH />
//               </button>
//             </div>
//           </div>

//           {/* Video description */}
//           <div className="mt-4 bg-gray-100 p-4 rounded-lg">
//             <div className="flex items-center text-sm text-gray-600 mb-2">
//               <span className="font-medium mr-2">895K views</span>
//               <span className="mr-2">•</span>
//               <span>2 days ago</span>
//             </div>
//             <p className="text-sm text-gray-800">
//               Watch the highlights from the exciting 1st T20I match between New
//               Zealand and Pakistan. Pakistan tour of New Zealand continues with
//               thrilling cricket action in this T20 International series. #NZvPAK
//               #CricketHighlights #T20Cricket
//             </p>
//             <button className="text-sm text-gray-600 mt-2 font-medium">
//               Show more
//             </button>
//           </div>

//           {/* Comments section */}
//           <div className="mt-6">
//             <div className="flex items-center mb-4">
//               <h2 className="font-bold text-lg text-black">Comments</h2>
//               <span className="ml-2 text-sm text-gray-600">2.4K</span>
//             </div>

//             {/* Comment input */}
//             <div className="flex mb-6">
//               <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
//               <div className="ml-3 flex-grow">
//                 <input
//                   type="text"
//                   placeholder="Add a comment..."
//                   className="w-full border-b border-gray-300 pb-1 focus:outline-none focus:border-gray-400 text-sm"
//                 />
//               </div>
//             </div>

//             {/* Comment example */}
//             <div className="flex mb-4">
//               <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
//               <div className="ml-3">
//                 <div className="flex items-center">
//                   <p className="font-medium text-sm text-black">Cricket Fan</p>
//                   <p className="text-xs text-gray-600 ml-2">3 days ago</p>
//                 </div>
//                 <p className="text-sm text-gray-800 mt-1">
//                   Great match! Both teams played really well. Looking forward to
//                   the next game!
//                 </p>
//                 <div className="flex items-center mt-2 space-x-4">
//                   <button className="flex items-center text-sm text-gray-600">
//                     <FaThumbsUp className="mr-2 text-xs" /> 245
//                   </button>
//                   <button className="flex items-center text-sm text-gray-600">
//                     <FaThumbsDown className="mr-2 text-xs" />
//                   </button>
//                   <button className="text-sm text-gray-600">Reply</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="lg:col-span-1 flex flex-col gap-6">
//           {/* Right side - Live Chat */}
//           <div className="order-2 lg:order-1">
//             <LiveChat className="sticky top-20 w-full h-auto lg:h-[500px] overflow-hidden rounded-lg shadow-sm" />
//           </div>
//           {/* Right side - Recommended videos */}
//           <div className="space-y-3">
//             <h3 className="font-medium text-black mb-1">Recommended</h3>
//             {/* Recommended videos content remains the same... */}
//             {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//               <div key={item} className="flex space-x-2 cursor-pointer">
//                 <div className="w-40 h-24 bg-gray-200 flex-shrink-0">
//                   {/* Thumbnail placeholder */}
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-black line-clamp-2">
//                     Pakistan vs New Zealand | {item}nd T20I Highlights
//                   </h4>
//                   <p className="text-xs text-gray-600 mt-1">
//                     Cricket New Zealand
//                   </p>
//                   <div className="flex items-center text-xs text-gray-600 mt-1">
//                     <span>462K views</span>
//                     <span className="mx-1">•</span>
//                     <span>
//                       {item} day{item !== 1 ? "s" : ""} ago
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WatchPage;
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaDownload,
  FaEllipsisH,
} from "react-icons/fa";
import LiveChat from "../components/LiveChat";
import { clearMessages } from "../utils/chatSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [loading, setLoading] = useState(true);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    // Note: You might want to decide if you want to unconditionally close the menu
    // on the watch page or allow it to be open. If you want to always close it,
    // keep this, otherwise remove it.
    dispatch(closeMenu());
    dispatch(clearMessages());
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isMenuOpen ? "ml-60" : "ml-0"
      } px-5 pt-20 pb-8 md:px-14 lg:px-20 bg-white`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side - Video player and info */}
        <div className="lg:col-span-2">
          {/* Video player */}
          <div className="w-full aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Rest of the component remains the same... */}
          <h1 className="text-xl font-bold mt-4 text-black">
            Pakistan Tour Of New Zealand | Highlights | 1st T20I
          </h1>

          {/* Video stats and actions */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 pb-3 border-b border-gray-200">
            {/* Channel info */}
            <div className="flex items-center mb-3 sm:mb-0">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="ml-3">
                <p className="font-medium text-black">Cricket New Zealand</p>
                <p className="text-sm text-gray-600">2.5M subscribers</p>
              </div>
              <button className="ml-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full px-4 py-2 text-sm">
                Subscribe
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-full px-4 py-2 text-sm">
                <FaThumbsUp className="mr-2" /> 45K
              </button>
              <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-full px-4 py-2 text-sm">
                <FaThumbsDown className="mr-2" />
              </button>
              <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-full px-4 py-2 text-sm">
                <FaShare className="mr-2" /> Share
              </button>
              <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-full px-4 py-2 text-sm">
                <FaDownload className="mr-2" /> Download
              </button>
              <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-full p-2 text-sm">
                <FaEllipsisH />
              </button>
            </div>
          </div>

          {/* Video description */}
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <span className="font-medium mr-2">895K views</span>
              <span className="mr-2">•</span>
              <span>2 days ago</span>
            </div>
            <p className="text-sm text-gray-800">
              Watch the highlights from the exciting 1st T20I match between New
              Zealand and Pakistan. Pakistan tour of New Zealand continues with
              thrilling cricket action in this T20 International series. #NZvPAK
              #CricketHighlights #T20Cricket
            </p>
            <button className="text-sm text-gray-600 mt-2 font-medium">
              Show more
            </button>
          </div>

          {/* Comments section */}
          <div className="mt-6">
            <div className="flex items-center mb-4">
              <h2 className="font-bold text-lg text-black">Comments</h2>
              <span className="ml-2 text-sm text-gray-600">2.4K</span>
            </div>

            {/* Comment input */}
            <div className="flex mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="ml-3 flex-grow">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full border-b border-gray-300 pb-1 focus:outline-none focus:border-gray-400 text-sm"
                />
              </div>
            </div>

            {/* Comment example */}
            <div className="flex mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="ml-3">
                <div className="flex items-center">
                  <p className="font-medium text-sm text-black">Cricket Fan</p>
                  <p className="text-xs text-gray-600 ml-2">3 days ago</p>
                </div>
                <p className="text-sm text-gray-800 mt-1">
                  Great match! Both teams played really well. Looking forward to
                  the next game!
                </p>
                <div className="flex items-center mt-2 space-x-4">
                  <button className="flex items-center text-sm text-gray-600">
                    <FaThumbsUp className="mr-2 text-xs" /> 245
                  </button>
                  <button className="flex items-center text-sm text-gray-600">
                    <FaThumbsDown className="mr-2 text-xs" />
                  </button>
                  <button className="text-sm text-gray-600">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Right side - Live Chat */}
          <div className="order-1">
            <LiveChat className="w-full h-auto lg:h-[500px] overflow-hidden rounded-lg shadow-sm sticky top-20" />
          </div>
          {/* Right side - Recommended videos */}
          <div className="order-2 space-y-3">
            <h3 className="font-medium text-black mb-1">Recommended</h3>
            {/* Recommended videos content remains the same... */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex space-x-2 cursor-pointer">
                <div className="w-40 h-24 bg-gray-200 flex-shrink-0">
                  {/* Thumbnail placeholder */}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-black line-clamp-2">
                    Pakistan vs New Zealand | {item}nd T20I Highlights
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Cricket New Zealand
                  </p>
                  <div className="flex items-center text-xs text-gray-600 mt-1">
                    <span>462K views</span>
                    <span className="mx-1">•</span>
                    <span>
                      {item} day{item !== 1 ? "s" : ""} ago
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
