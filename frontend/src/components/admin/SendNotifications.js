import React, { useState } from 'react';

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
    <div className="p-4">
      <h2 className="text-2xl mb-4">Send Notifications</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter the notification message"
        className="mb-4 p-2 border rounded"
      />
      <input
        type="text"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
        placeholder="Recipients (comma separated)"
        className="mb-4 p-2 border rounded"
      />
      <button
        onClick={handleSendNotification}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Send Notification
      </button>
    </div>
  );
};

export default SendNotifications;
