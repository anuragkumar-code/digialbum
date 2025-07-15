import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Album = () => {
  const { id } = useParams();
  const albums = [
    { id: 1, name: "Summer Escapes", photoCount: 25, date: "July 2025" },
    { id: 2, name: "Family Moments", photoCount: 15, date: "June 2025" },
    { id: 3, name: "Wedding Bliss", photoCount: 50, date: "May 2025" },
    { id: 4, name: "Mountain Trails", photoCount: 30, date: "April 2025" },
    { id: 5, name: "City Lights", photoCount: 20, date: "March 2025" },
    { id: 6, name: "Beach Days", photoCount: 18, date: "February 2025" },
    { id: 7, name: "Holiday Magic", photoCount: 40, date: "January 2025" },
    { id: 8, name: "Autumn Leaves", photoCount: 22, date: "December 2024" },
    { id: 9, name: "Winter Nights", photoCount: 15, date: "November 2024" },
    { id: 10, name: "Spring Bloom", photoCount: 28, date: "October 2024" },
    { id: 11, name: "Road Trips", photoCount: 35, date: "September 2024" },
    { id: 12, name: "Festival Vibes", photoCount: 45, date: "August 2024" },
    { id: 13, name: "Garden Parties", photoCount: 20, date: "July 2024" },
    { id: 14, name: "Rainy Days", photoCount: 17, date: "June 2024" },
    { id: 15, name: "Starry Skies", photoCount: 25, date: "May 2024" },
  ];

  const album = albums.find((a) => a.id === parseInt(id));
  if (!album) return <div>Album not found</div>;

  const imageUrls = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  ];

  return (
    <div className="min-h-screen bg-secondary-light-mint flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-merriweather text-primary-sea-green">
                {album.name}
            </h1>
            <p className="text-base sm:text-lg font-poppins text-text-dark-teal mt-2 sm:mt-0">
                Date: {album.date}
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageUrls.map((src, index) => (
            <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md h-64"
                >
                <img
                    src={src}
                    alt={`${album.name} photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
          ))}
        </div>
      </main>
      <Footer className="w-full mt-auto" />
    </div>
  );
};

export default Album;
