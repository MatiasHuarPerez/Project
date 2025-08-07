import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, useLocation,Router} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/navbar/NavBar';
import ContactList from "./components/ContactList/ContactList";
import ChatPanel from "./components/ChatPanel/ChatPanel";
import WhatsappImage from "./components/WhatsappImage/WhatsappImage";
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
