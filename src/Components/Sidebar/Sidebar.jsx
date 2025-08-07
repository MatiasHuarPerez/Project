import { BsChatSquareText, BsPersonCircle } from "react-icons/bs";
import { MdOutlineSettings, MdOutlineGroups, } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { IoIosChatbubbles } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircleWarning } from "react-icons/lu";


const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top-icons">
          <BsChatSquareText className="icon primary-icon" />
          <GrHistory className="icon" />
          <LuMessageCircleWarning className="icon" />
          <MdOutlineGroups className="icon spaced-icon" />
        </div>
        <div className="bottom-icons">
          <MdOutlineSettings className="icon" />
          <BsPersonCircle className="icon" />

        </div>
      </div>
      <div className="sidebar-mobile">
        <GrHistory className="icon" />
        <IoCallOutline className="icon" />
        <MdOutlineGroups className="icon" />
        <IoIosChatbubbles className="icon primary-icon" />
        <MdOutlineSettings className="icon" />
      </div>
    </>
  );
};

export default Sidebar;

