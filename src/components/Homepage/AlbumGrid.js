// src/components/Homepage/AlbumGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AlbumGrid = ({ albums }) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {albums.map((album) => (
        <Link
          key={album.id}
          to={`/albums/${album.id}`}
          className="album-tile block w-full break-inside-avoid relative group overflow-hidden rounded-lg shadow-md"
          style={{ height: `${album.height}px` }}
          aria-label={`View ${album.name} album`}
        >
          <img
            src={album.src}
            alt={album.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-secondary-light-mint">
            <h2 className="text-xl font-merriweather font-bold mb-1 group-hover:animate-zoom">
              {album.name}
            </h2>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-poppins text-text-dark-teal">
              <p>{album.photoCount} Photos</p>
              <p>{album.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AlbumGrid;
