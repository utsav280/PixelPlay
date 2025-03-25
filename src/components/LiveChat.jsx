import React, { useEffect, useState, useRef } from "react";
import ChatMessage from "../components/ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { Smile } from "lucide-react";
import { emojis } from "../utils/constant";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveMessages = useSelector((store) => store.chat.messages);
  const [showEmojis, setShowEmojis] = useState(false);
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: "Utsav Goyal",
          message: `Lorem${Math.random() * 10}`,
        })
      );
    }, 1000);
    return () => {
      clearInterval(i);
    };
  }, []);

  // Function to add emoji to input text
  const addEmoji = (emoji) => {
    setInputText((prevText) => prevText + emoji);
    setShowEmojis(false);
    // Focus back on input after selecting emoji
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div className="w-full rounded-t-lg text-black border border-gray-200 ml-2 h-[450px] bg-white overflow-y-scroll flex flex-col shadow-sm">
        <div className="flex items-center bg-white border-b border-gray-200 p-3 sticky top-0 z-10">
          <h1 className="font-medium text-base text-gray-900">Live chat</h1>
        </div>

        {/* This creates space at the top so older messages appear there */}
        <div className="flex-grow"></div>

        {/* Messages container */}
        <div className="px-1">
          {liveMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message + ""} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col bg-white border-b border-l border-r border-gray-200 rounded-b-lg ml-2">
        {/* Emoji picker */}
        {showEmojis && (
          <div className="p-2 border-b border-gray-200">
            <div className="flex flex-wrap gap-2">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  className="w-8 h-8 text-xl flex items-center justify-center hover:bg-gray-100 rounded-full"
                  onClick={() => addEmoji(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat input area */}
        <div className="flex items-center px-2 py-3">
          <div className="flex items-center w-full gap-2">
            <div className="flex-shrink-0">
              <img
                alt="User avatar"
                className="rounded-full"
                height="24"
                width="24"
                src="https://yt4.ggpht.com/ytc/AIdro_kb9hMLK7jkWDHYgZaYIneXObWovgpOy4ZuSZj-ZLoPlpbT0cYsVrN7JGCOxCPlBKrwrw=s32-c-k-c0x00ffffff-no-rj"
              />
            </div>
            <form
              className="relative flex-grow flex items-center border border-gray-300 rounded-full overflow-hidden"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  addMessage({ name: "Utsav Goyal", message: inputText })
                ) &&
                  setInputText("") &&
                  inputRef.current.focus();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Chat..."
                className="w-full text-sm py-1 px-3 focus:outline-none"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button
                type="button"
                className="flex-shrink-0 text-gray-500 hover:text-gray-700 mr-2"
                onClick={() => setShowEmojis(!showEmojis)}
              >
                <Smile size={20} />
              </button>
            </form>
            <button
              type="submit"
              className={`flex-shrink-0 text-sm font-medium ${
                inputText.trim() ? "text-blue-500" : "text-gray-400"
              }`}
              onClick={() =>
                dispatch(
                  addMessage({ name: "Utsav Goyal", message: inputText })
                ) &&
                setInputText("") &&
                inputRef.current.focus()
              }
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
