import React, { useState } from 'react';
import '../../styles/SendNotifications.css'; // Import external CSS

const SendNotifications = () => {
  const [message, setMessage] = useState('');
  const [recipients, setRecipients] = useState('');

  const handleSendNotification = () => {
    // Simulate sending a notification
    console.log(`Notification sent to: ${recipients}`);
    console.log(`Message: ${message}`);
    setMessage('');
    setRecipients('');
  };

  return (
    <div className="send-notifications-container">
      <h2 className="send-notifications-title">📢 Send Notification</h2>

      <label className="form-label" htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter the notification message..."
        className="form-textarea"
      />

      <label className="form-label" htmlFor="recipients">Recipients</label>
      <input
        id="recipients"
        type="text"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
        placeholder="Recipients (comma separated)..."
        className="form-input"
      />

      <button
        onClick={handleSendNotification}
        className="send-button"
      >
        Send Notification
      </button>
    </div>
  );
};

export default SendNotifications;
