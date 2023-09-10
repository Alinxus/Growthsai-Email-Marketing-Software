// frontend/components/Auth/UserProfile.js
import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Implement save/update user logic here (e.g., API request)

    // After successful update, exit edit mode
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset edited user data and exit edit mode
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {!isEditing ? (
        <div className="user-details">
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more user details as needed */}
          <button className="edit-profile-button" onClick={handleEditClick}>Edit Profile</button>
        </div>
      ) : (
        <div className="user-edit-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={editedUser.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
            />
          </div>
          {/* Add more editable user details as needed */}
          <button className="save-profile-button" onClick={handleSaveClick}>Save</button>
          <button className="cancel-profile-button" onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
      <hr />
      <div className="change-password-section">
        <h3>Change Password</h3>
        {/* Add change password functionality here */}
        <button className="change-password-button">Change Password</button>
      </div>
    </div>
  );
};

export default UserProfile;
