import React, { useState } from "react";

const NewMessageForm = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const trimmedText = text.trim();
    if (!trimmedText) return;

    onSend(trimmedText);  
    setText(""); 
  };

  return (
    <form className="new-message-form" onSubmit={handleSubmit}>
      <div className="left-icons"></div>
      <input
        type="text"
        placeholder="Escribe un mensaje"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">➤</button>
    </form>
  );
};

export default NewMessageForm;
