import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AlbumForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState('');
  const [shareSettings, setShareSettings] = useState('private');
  const [people, setPeople] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/albums', { name, date, tags, shareSettings, people });
      toast.success('Album created successfully');
      navigate('/dashboard');

    } catch (error) {
      toast.error('Failed to create album');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Album</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="comma-separated tags"
          />
        </div>
        <div>
          <label className="block text-gray-700">Share Settings</label>
          <select
            value={shareSettings}
            onChange={(e) => setShareSettings(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="private">Private</option>
            <option value="public">Public</option>
            <option value="shared">Shared with specific users</option>
          </select>
        </div>
        {shareSettings === 'shared' && (
          <div>
            <label className="block text-gray-700">Add People (comma-separated emails)</label>
            <input
              type="text"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Create Album
        </button>
      </div>
    </div>
  );
};

export default AlbumForm;