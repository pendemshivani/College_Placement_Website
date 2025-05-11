import React, { useEffect, useState } from 'react';
import '../../styles/Notifications.css'; // Import the external CSS

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetching notifications
    setNotifications([
      { id: 1, message: 'Your resume has been shortlisted for a position at TechCorp.' },
      { id: 2, message: 'New job listings are available for you to apply.' },
    ]);
  }, []);

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">🔔 Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div key={notification.id} className="notification-card">
            <p>{notification.message}</p>
          </div>
        ))
      ) : (
        <p className="no-notifications">No new notifications.</p>
      )}
    </div>
  );
};

export default Notifications;
