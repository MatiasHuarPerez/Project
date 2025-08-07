import React from "react";
import { LuMessageSquarePlus } from "react-icons/lu";
import { BiDotsVerticalRounded } from "react-icons/bi";



const ChatHeader = () => {
  return (
    <div className="header">
      <header className="header-title">WhatsApp</header>
      <div className="icons">
        <LuMessageSquarePlus className="icon" />
        <BiDotsVerticalRounded className="icon" />
      </div>
    </div>
  );
};

export default ChatHeader;