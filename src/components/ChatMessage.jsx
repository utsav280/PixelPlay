// import React from "react";

// const ChatMessage = ({ name, message }) => {
//   return (
//     <div>
//       <div className="flex items-center p-2 space-x-2">
//         <img
//           alt=""
//           draggable="false"
//           className=" rounded-full"
//           height="24"
//           width="24"
//           src="https://yt4.ggpht.com/ytc/AIdro_kb9hMLK7jkWDHYgZaYIneXObWovgpOy4ZuSZj-ZLoPlpbT0cYsVrN7JGCOxCPlBKrwrw=s32-c-k-c0x00ffffff-no-rj"
//         />
//         <span className="font-semibold text-gray-900 ">{name}</span>
//         <span className="font-normal text-sm">{message}</span>
//       </div>
//     </div>
//   );
// };

// export default ChatMessage;

import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="py-1 px-2 hover:bg-gray-100 rounded">
      <div className="flex items-center space-x-2">
        <img
          alt=""
          draggable="false"
          className="rounded-full flex-shrink-0"
          height="24"
          width="24"
          src="https://yt4.ggpht.com/ytc/AIdro_kb9hMLK7jkWDHYgZaYIneXObWovgpOy4ZuSZj-ZLoPlpbT0cYsVrN7JGCOxCPlBKrwrw=s32-c-k-c0x00ffffff-no-rj"
        />
        <div className="flex flex-wrap items-baseline gap-x-1">
          <span className="font-medium text-sm text-gray-800">{name}</span>
          <span className="text-sm text-gray-900">{message}</span>
        </div>
      </div>
    </div>
  );
};
const original = { a: 1, b: { c: 2 } };
const copy = { ...original };
const deepCopy = JSON.parse(JSON.stringify(original));

console.log(original);
console.log(copy);
console.log(deepCopy);
original.a = 3;
original.b.c = 4;
console.log(original);
console.log(copy);
console.log(deepCopy);

console.log(original.a, original.b.c);
console.log(copy.a, copy.b.c);
console.log(deepCopy.a, deepCopy.b.c);

export default ChatMessage;
