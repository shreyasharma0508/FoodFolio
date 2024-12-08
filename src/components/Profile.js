import React, { useState } from "react";
import "./Profile.css";
import { useUser } from "../context/UserContext";

function Profile() {
  const { userData, setUserData } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setEditedData({ ...userData }); // Reset edits if canceled
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    setUserData(editedData); // Save updates to context
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <p>Manage your account and preferences here.</p>
      <div className="profile-card">
        {/* Name */}
        <div className="profile-detail">
          <span className="profile-icon">👤</span>
          <span>
            <strong>Name:</strong>
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="firstName"
                  value={editedData.firstName}
                  onChange={handleChange}
                  className="profile-input"
                />
                <input
                  type="text"
                  name="lastName"
                  value={editedData.lastName}
                  onChange={handleChange}
                  className="profile-input"
                />
              </>
            ) : (
              `${userData.firstName} ${userData.lastName}`
            )}
          </span>
        </div>

        {/* Email */}
        <div className="profile-detail">
          <span className="profile-icon">📧</span>
          <span>
            <strong>Email:</strong>{" "}
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedData.email}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              userData.email
            )}
          </span>
        </div>

        {/* Goals */}
        <div className="profile-detail">
          <span className="profile-icon">🎯</span>
          <span>
            <strong>Goals:</strong>{" "}
            {isEditing ? (
              <textarea
                name="goals"
                value={editedData.goals.join(", ")}
                onChange={(e) =>
                  setEditedData((prev) => ({
                    ...prev,
                    goals: e.target.value.split(",").map((goal) => goal.trim()),
                  }))
                }
                className="profile-input"
              />
            ) : (
              userData.goals.join(", ")
            )}
          </span>
        </div>

        {/* Weekly Goal */}
        <div className="profile-detail">
          <span className="profile-icon">📅</span>
          <span>
            <strong>Weekly Goal:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="weeklyGoal"
                value={editedData.weeklyGoal}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              userData.weeklyGoal
            )}
          </span>
        </div>

        {/* Activity Level */}
        <div className="profile-detail">
          <span className="profile-icon">🏃</span>
          <span>
            <strong>Activity Level:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="activityLevel"
                value={editedData.activityLevel}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              userData.activityLevel
            )}
          </span>
        </div>

        {/* Height */}
        <div className="profile-detail">
          <span className="profile-icon">📏</span>
          <span>
            <strong>Height:</strong>{" "}
            {isEditing ? (
              <>
                <input
                  type="number"
                  name="heightFeet"
                  value={editedData.heightFeet}
                  onChange={handleChange}
                  className="profile-input"
                  style={{ width: "50px", marginRight: "5px" }}
                />
                ft
                <input
                  type="number"
                  name="heightInches"
                  value={editedData.heightInches}
                  onChange={handleChange}
                  className="profile-input"
                  style={{ width: "50px", marginLeft: "10px", marginRight: "5px" }}
                />
                in
              </>
            ) : (
              `${userData.heightFeet}' ${userData.heightInches}"`
            )}
          </span>
        </div>

        {/* Current Weight */}
        <div className="profile-detail">
          <span className="profile-icon">⚖️</span>
          <span>
            <strong>Current Weight:</strong>{" "}
            {isEditing ? (
              <input
                type="number"
                name="currentWeight"
                value={editedData.currentWeight}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              `${userData.currentWeight} lbs`
            )}
          </span>
        </div>

        {/* Goal Weight */}
        <div className="profile-detail">
          <span className="profile-icon">🎯</span>
          <span>
            <strong>Goal Weight:</strong>{" "}
            {isEditing ? (
              <input
                type="number"
                name="goalWeight"
                value={editedData.goalWeight}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              `${userData.goalWeight} lbs`
            )}
          </span>
        </div>

        {/* Zip Code */}
        <div className="profile-detail">
          <span className="profile-icon">📍</span>
          <span>
            <strong>Zip Code:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="zipCode"
                value={editedData.zipCode}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              userData.zipCode
            )}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="profile-actions">
        {isEditing ? (
          <>
            <button className="btn-primary" onClick={saveChanges}>
              Save Changes
            </button>
            <button className="btn-secondary" onClick={toggleEdit}>
              Cancel
            </button>
          </>
        ) : (
          <button className="btn-primary" onClick={toggleEdit}>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
