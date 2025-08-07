import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; 

const ContactItem = ({ contact }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chat/${contact.id}`);
  };

  return (
    <div className="contact-item" onClick={handleClick}>
      <img src={contact.avatar} alt={contact.name} className="contact-avatar" />
      <div className="contact-info">
        <div className="contact-header">
          <div className="contact-name">{contact.name}</div>
          <div className="contact-time">13:37</div> 
        </div>
        <div className="contact-last-message">
          {contact.messages[contact.messages.length - 1]?.text}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
