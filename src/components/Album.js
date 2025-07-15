import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Album = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/albums/${id}/photos`)
      .then(response => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch(error => {
        toast.error('Failed to load photos');
        setLoading(false);
      });
  }, [id]);

  const openLightbox = (index) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleUpload = (e) => {
    const files = e.target.files;
    setUploading(true);
    setUploadProgress(0);
    const formData = new FormData();
    formData.append('albumId', id);
    Array.from(files).forEach(file => formData.append('photos', file));

    axios.post('/api/upload', formData, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      },
    })
      .then(() => {
        toast.success('Upload successful');
        axios.get(`/api/albums/${id}/photos`)
          .then(response => setPhotos(response.data));
        setUploading(false);
        setUploadProgress(0);
      })
      .catch(() => {
        toast.error('Upload failed');
        setUploading(false);
        setUploadProgress(0);
      });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Album Photos</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <PhotoAlbum
            photos={photos.map((photo, index) => ({
              src: photo.url,
              width: photo.width,
              height: photo.height,
              onClick: () => openLightbox(index),
            }))}
            layout="masonry"
            targetRowHeight={200}
          />
          {isLightboxOpen && (
            <Lightbox
              mainSrc={photos[currentPhotoIndex].url}
              nextSrc={photos[(currentPhotoIndex + 1) % photos.length].url}
              prevSrc={photos[(currentPhotoIndex - 1 + photos.length) % photos.length].url}
              onCloseRequest={closeLightbox}
              onMovePrevRequest={() => setCurrentPhotoIndex((currentPhotoIndex + photos.length - 1) % photos.length)}
              onMoveNextRequest={() => setCurrentPhotoIndex((currentPhotoIndex + 1) % photos.length)}
            />
          )}
          <div className="mt-4">
            <label className="inline-flex items-center bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition cursor-pointer">
              <i className="fas fa-upload mr-2"></i> Upload Photos
              <input type="file" multiple className="hidden" onChange={handleUpload} disabled={uploading} />
            </label>
            {uploading && (
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-center mt-1">{uploadProgress}%</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Album;