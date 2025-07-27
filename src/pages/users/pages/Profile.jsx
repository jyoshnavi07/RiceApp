import React, { useState } from 'react';
import PrimaryBtn from '../../../components/common/PrimaryBtn';
import SecondaryBtn from '../../../components/common/SecondaryBtn';
import Mybtn from '../../../components/common/Mybtn';
import Headings from '../../../components/common/Headings';

const Profile = () => {
  // State to store profile info
  const [profile, setProfile] = useState({
    fullName: 'Jessy',
    email: 'jessy@example.com',
    role: 'Public',
    status: 'Active',
    profilepic: ''
  });

  // State to toggle edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };


  return (
    <div className="container mt-5">
      <Headings title='Profile Details' />
      <div className="row g-4">

        {/* Profile Card */}
        <div className="col-md-4">
          <div className="card text-center p-4 shadow">
            <div className="d-flex justify-content-center">
              {/* <i className="bi bi-person-circle text-secondary" style={{ fontSize: '6rem' }}></i> */}

              {profile.profilepic ? (
                <img
                  src={profile.profilepic}
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              ) : (
                <div
                  className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
                  style={{ width: '100px', height: '100px', fontSize: '3rem' }}
                >
                  {profile.fullName?.charAt(0).toUpperCase()}
                </div>
              )}


            </div>
            <h3 className="card-title fw-bold">{profile.fullName}</h3>
            <p className='text-muted small'>{profile.role}</p>
            <Mybtn title='Logout' background='red' onClick={{}} />
          </div>
        </div>

        {/* Details Card */}
        <div className="col-md-8">
          <div className="card p-4 shadow">
            <h5 className="mb-3">Profile Details</h5>

            {isEditing ? (
              <>
                <div className="mb-2">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    name="role"
                    value={profile.role}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Status</label>
                  <input
                    type="text"
                    className="form-control"
                    name="status"
                    value={profile.status}
                    onChange={handleChange}
                  />
                </div>
                <PrimaryBtn title='Save' onClick={() => setIsEditing(false)}/>
                <Mybtn title='Cancle' background='gray'  onClick={() => setIsEditing(false)} />
              </>
            ) : (
              <>
                <p><strong>Full Name:</strong> {profile.fullName}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Role:</strong> {profile.role}</p>
                <p><strong>Status:</strong> {profile.status}</p>
                <SecondaryBtn title='Update Profile' onClick={() => setIsEditing(true)}/>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
