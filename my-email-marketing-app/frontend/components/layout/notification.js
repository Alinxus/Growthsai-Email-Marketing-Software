// frontend/components/Notifications.js
import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Function to add a new notification
  const addNotification = (message, type) => {
    // Generate a unique ID for the notification (you can use a library like uuid)
    const id = Math.random().toString(36).substr(2, 9);
    
    // Create a new notification object
    const newNotification = {
      id,
      message,
      type,
    };

    // Add the notification to the state
    setNotifications([...notifications, newNotification]);

    // Automatically remove the notification after a certain time (e.g., 5 seconds)
    setTimeout(() => {
      removeNotification(id);
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  // Function to remove a notification by ID
  const removeNotification = (idToRemove) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== idToRemove);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="notifications">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification ${notification.type}`}
          onClick={() => removeNotification(notification.id)}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
