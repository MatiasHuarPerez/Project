import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PiVideoCameraBold } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { RxDotsVertical } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa";
import contactService from "../../services/contactService";
import NewMessageForm from "../NewMessageForm/NewMessageForm";


const ChatPanel = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const hasMounted = useRef(false); 

  useEffect(() => {
    const loadContact = async () => {
      const data = await contactService.getContactById(contactId);
      setContact(data);
      setMessages(data?.messages || []);
    };

    loadContact();
  }, [contactId]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const message = { text, sender: "me" };
    await contactService.addMessageToContact(contactId, message);


setMessages((prevMessages) => [...prevMessages, message]);
  };

  if (!contact) return null;

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <div className="mobile-back-button" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </div>
        <div className="chat-header-left">
          <img src={contact.avatar} alt={contact.name} className="chat-avatar" />
          <span className="chat-name">{contact.name}</span>
        </div>
        <div className="chat-header-icons">
          <PiVideoCameraBold className="chat-icon" />
          <IoSearchOutline className="chat-icon" />
          <RxDotsVertical className="chat-icon" />
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === "me" ? "sent" : "received"}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <NewMessageForm onSend={handleSendMessage} />
    </div>
  );
};

export default ChatPanel;
