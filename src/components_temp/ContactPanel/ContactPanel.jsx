import React, { useState, useEffect } from "react";
import contactService from "../../services/contactService";
import { IoChatboxEllipsesOutline, IoEllipsisVerticalSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import "./ContactPanel.css";
import ContactList from "../ContactList/ContactList";

const ContactPanel = ({ onSelectContact }) => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  <div className={`contact-list-container ${selectedContactId ? "hide-on-mobile" : ""}`}>
  <ContactList />
</div>


  useEffect(() => {
    const fetchContacts = async () => {
      const data = await contactService.getContacts();
      setContacts(data);
    };

    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-panel">
      <div className="contact-list">
        {filteredContacts.map((contact) => (
          <div
            className="contact-item"
            key={contact.id}
            onClick={() => onSelectContact(contact.id)}
          >
            <img className="avatar" src={contact.avatar} alt={contact.name} />
            <div className="contact-info">
              <div className="contact-name">{contact.name}</div>
              <div className="last-message">
                {contact.messages?.[contact.messages.length - 1]?.text || ""}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPanel;
