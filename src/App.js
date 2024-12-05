import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { text: "Hello! Askeva", timestamp: "10:28 AM" },
    { text: "Case Studies", timestamp: "10:28 AM" },
  ]);
  const [contacts, setContacts] = useState([
    { name: "UK", lastMessage: "Case Studies", date: "05/12/2024", status: "online" },
    { name: "Sha Rude!", lastMessage: "NAME OF THE PERSON...", date: "05/12/2024" },
    { name: "Vicky[SolveInnovative]", lastMessage: "NAME OF THE PERSON...", date: "05/12/2024" },
    { name: "Mr. Crazy & Mad Scientist", lastMessage: "NAME OF THE PERSON...", date: "05/12/2024" },
    { name: "SHA ROOK, BDM-ASKEVA", lastMessage: "NAME OF THE PERSON...", date: "05/12/2024" },
    { name: "L1 Support Team, Askeva.", lastMessage: "main menu", date: "05/12/2024" },
  ]);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="waba-info">
          {/* Use the external WhatsApp logo */}
          <img src="https://img.icons8.com/?size=48&id=QkXeKixybttw&format=gif" alt="WhatsApp Logo" className="whatsapp-logo" />
          <p>
            <strong>WABA Number:</strong> 1234567890 | 
            <strong> Status:</strong> Live | 
            <strong> Quality:</strong> GREEN | 
            <strong> Tier 1:</strong> MSG 1000 LIMIT
          </p>
        </div>
        <input type="text" placeholder="Search or start a new chat" className="search-bar" />
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Contact List */}
        <div className="contact-list">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-item">
              <p>
                <strong>{contact.name}</strong>
              </p>
              <p>{contact.lastMessage}</p>
              <span className="date">{contact.date}</span>
            </div>
          ))}
        </div>

        {/* Chat Panel */}
        <div className="chat-panel">
          <div className="chat-header">
            <strong>UK</strong>
            <span className="chat-date">05/12/2024</span>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className="message">
                <p>{message.text}</p>
                <span className="timestamp">{message.timestamp}</span>
              </div>
            ))}
          </div>

          <div className="message-input">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
