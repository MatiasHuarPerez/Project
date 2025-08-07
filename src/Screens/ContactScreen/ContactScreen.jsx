import React from "react";
import { RxDotsVertical } from "react-icons/rx";
import { LuMessageSquarePlus } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import "./ContactScreen.css";

const ContactScreen = () => {
  return (
    <div className="contact-panel">
      <div className="contact-header">
        <h1>WhatsApp</h1>
        <div className="icons">
          <LuMessageSquarePlus className="header-icon" />
          <RxDotsVertical className="header-icon" />
        </div>
      </div>

      <div className="search-bar">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Buscar un chat o iniciar uno nuevo" />
      </div>

      <div className="filter-buttons">
        <button className="active">Todos</button>
        <button>No leídos</button>
        <button>Favoritos</button>
        <button>Grupos</button>
      </div>
    </div>
  );
};

export default ContactScreen;
