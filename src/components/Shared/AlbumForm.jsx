import React, { useState } from "react";
import { toast } from "react-toastify";

const AlbumForm = ({ onSubmit }) => {
  const [albumDetails, setAlbumDetails] = useState({
    name: "",
    date: "",
    description: "",
    coverPhoto: null,
    tags: "",
    category: "",
    privacy: "",
    location: "",
    commentsEnabled: true,
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (type === "file") {
      setAlbumDetails({ ...albumDetails, [name]: files[0] });
    } else if (type === "checkbox") {
      setAlbumDetails({ ...albumDetails, [name]: checked });
    } else {
      setAlbumDetails({ ...albumDetails, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, date, description, coverPhoto, privacy } = albumDetails;

    if (!name.trim()) {
      toast.error("Album name is required");
      return;
    }

    if (!date) {
      toast.error("Please select a date for the album");
      return;
    }

    if (!description.trim()) {
      toast.error("Album description is required");
      return;
    }

    if (!coverPhoto) {
      toast.error("Please upload a cover photo");
      return;
    }

    if (!privacy) {
      toast.error("Please select a privacy setting");
      return;
    }

    toast.success("Album created successfully!");
    if (onSubmit) onSubmit(albumDetails);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-primary-sea-green mb-6">Create New Album</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-dark-teal">
              Album Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={albumDetails.name}
              onChange={handleChange}
              
              placeholder="Enter album name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-sea-green focus:border-primary-sea-green sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-text-dark-teal">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={albumDetails.date}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-sea-green focus:border-primary-sea-green sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-text-dark-teal">
            Album Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={albumDetails.description}
            onChange={handleChange}
            placeholder="Add a short description for the album"
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-sea-green focus:border-primary-sea-green sm:text-sm"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label htmlFor="coverPhoto" className="block text-sm font-medium text-text-dark-teal">
              Cover Photo <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="file"
                id="coverPhoto"
                name="coverPhoto"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
              <button
                type="button"
                className="mt-1 block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-primary-sea-green focus:border-primary-sea-green flex justify-between items-center bg-white hover:bg-gray-100 transition-all"
                onClick={() => document.getElementById("coverPhoto").click()}
              >
                <span className="text-sm">Choose an image</span>
                <span className="text-xl text-gray-400 ml-2">📂</span>
              </button>
              {albumDetails.coverPhoto && (
                <img
                  src={URL.createObjectURL(albumDetails.coverPhoto)}
                  alt="Preview"
                  className="mt-2 h-32 rounded object-cover border"
                />
              )}
            </div>
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-text-dark-teal">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={albumDetails.tags}
              onChange={handleChange}
              placeholder="Add tags (comma-separated)"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-sea-green focus:border-primary-sea-green sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-text-dark-teal">
              Album Category
            </label>
            <select
              id="category"
              name="category"
              value={albumDetails.category}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-sea-green focus:border-primary-sea-green sm:text-sm"
            >
              <option value="" disabled>Select a category</option>
              <option value="Vacation">Vacation</option>
              <option value="Family">Family</option>
              <option value="Events">Events</option>
              <option value="Work">Work</option>
              <option value="Nature">Nature</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="privacy" className="block text-sm font-medium text-text-dark-teal">
              Privacy Settings <span className="text-red-500">*</span>
            </label>
            <select
              id="privacy"
              name="privacy"
              value={albumDetails.privacy}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-sea-green focus:border-primary-sea-green sm:text-sm"
            >
              <option value="">Select Privacy</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
              <option value="Friends Only">Friends Only</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-text-dark-teal">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={albumDetails.location}
              onChange={handleChange}
              placeholder="Enter location (e.g., Paris, France)"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-sea-green focus:border-primary-sea-green sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="commentsEnabled" className="block text-sm font-medium text-text-dark-teal">
            Allow Comments
          </label>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="commentsEnabled"
              name="commentsEnabled"
              checked={albumDetails.commentsEnabled}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="commentsEnabled" className="ml-2 text-sm text-gray-600">
              Enable comments on this album
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary-sea-green hover:bg-hover-forest-green text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all"
          >
            Create Album
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlbumForm;
