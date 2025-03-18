import React, { useEffect, useState } from 'react';

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
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      {notifications.map((notification) => (
        <div key={notification.id} className="bg-gray-100 p-4 mb-2 rounded">
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
