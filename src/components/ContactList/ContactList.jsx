import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import contactService from "../../services/contactService";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loadContacts = async () => {
      const data = await contactService.getContacts();
      setContacts(data);
    };

    loadContacts();
  }, []);

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <Link
          to={`/chat/${contact.id}`}
          key={contact.id}
          className="contact-item"
        >
          <img
            src={contact.avatar}
            alt={contact.name}
            className="contact-avatar"
          />
          <div className="contact-info">
            <div className="contact-header">
              <span className="contact-name">{contact.name}</span>
            </div>
            <div className="contact-last-message">
              {contact.messages[contact.messages.length - 1]?.text}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ContactList;
