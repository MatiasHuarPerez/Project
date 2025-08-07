import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from "./Components/Navbar/Navbar";
import ContactList from "./Components/ContactList/ContactList";
import ChatPanel from "./Components/ChatPanel/ChatPanel";
import WhatsappImage from "./Components/WhatsappImage/WhatsappImage";
import "./App.css";

const Layout = () => {
  const location = useLocation();
  const isChatOpen = location.pathname.startsWith("/chat/");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      {(!isMobile || !isChatOpen) && <Navbar />}
      {(!isMobile || !isChatOpen) && <ContactList />}
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WhatsappImage />} /> 
        <Route path="chat/:contactId" element={<ChatPanel />} />
      </Route>
    </Routes>
  );
}

export default App;
