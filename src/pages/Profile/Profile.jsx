import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Firebase/AuthContext';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [loading, setLoading] = useState(false);

    const handleUpdateProfile = async () => {
        setLoading(true);
        try {
            await updateProfile(user, { displayName: name, photoURL });
            toast.success('Profile updated successfully');
            setEditMode(false);
        } catch (error) {
            toast.error('Failed to update profile: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    {editMode ? (
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                        />
                    ) : (
                        <p className="mt-1 block w-full border border-gray-300 rounded p-2 bg-gray-200">{user?.displayName}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1 block w-full border border-gray-300 rounded p-2 bg-gray-200">{user?.email}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                    {editMode ? (
                        <input
                            type="url"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                        />
                    ) : (
                        <p className="mt-1 block w-full border border-gray-300 rounded p-2 bg-gray-200">{user?.photoURL}</p>
                    )}
                </div>
                {editMode ? (
                    <button
                        onClick={handleUpdateProfile}
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    >
                        {loading ? 'Updating...' : 'Save Changes'}
                    </button>
                ) : (
                    <button
                        onClick={() => setEditMode(true)}
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Update Profile
                    </button>
                )}
            </div>
        </div>
    );
};

export default Profile;
