import React, { useState, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, storage } from '../../firebase/firebase';
import { updateProfile, updatePassword, signOut } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './prof.css';
import { UserContext } from '../../contexts/UserContext';

const Profile = () => {
  const [user] = useAuthState(auth);
  const { setUserProfile } = useContext(UserContext);
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePasswordChange = async () => {
    if (newPassword && user) {
      setLoading(true);
      try {
        await updatePassword(user, newPassword);
        setMessage('Password updated successfully');
      } catch (error) {
        setMessage(error.message);
      }
      setLoading(false);
    }
  };

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    if (file && user) {
      setLoading(true);
      const storageRef = ref(storage, `profilePictures/${user.uid}/${file.name}`);
      try {
        await uploadBytes(storageRef, file);
        const newPhotoURL = await getDownloadURL(storageRef);
        await updateProfile(user, { photoURL: newPhotoURL });
        setUserProfile({ ...user, photoURL: newPhotoURL });
        setMessage('Profile picture updated successfully');
      } catch (error) {
        setMessage(error.message);
      }
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage('Logged out successfully');
    } catch (error) {
      setMessage(error.message);
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-details">
      <h1 className="profile-title">Profile</h1>
        <img src={user.photoURL || '/images/team/t1.webp'} alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <p className="profile-item">Email: <span className="profile-value">{user.email}</span></p>
        </div>
        <div className="profile-update">
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            disabled={loading}
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="profile-buttons">
          <button onClick={handlePasswordChange} disabled={loading}>Change Password</button>
          <button onClick={handleLogout} disabled={loading}>Logout</button>
        </div>
        {loading && <p>Updating...</p>}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Profile;