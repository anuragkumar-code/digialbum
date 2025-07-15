import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeaderNav from '../components/Homepage/HeaderNav';
import AlbumGrid from '../components/Homepage/AlbumGrid';

const albums = [
  { id: 1, name: "Summer Escapes", photoCount: 25, date: "July 2025", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 300 },
  { id: 2, name: "Family Moments", photoCount: 15, date: "June 2025", src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 400 },
  { id: 3, name: "Wedding Bliss", photoCount: 50, date: "May 2025", src: "https://images.unsplash.com/photo-1523438885200-7d3b7c10201f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 350 },
  { id: 4, name: "Mountain Trails", photoCount: 30, date: "April 2025", src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 450 },
  { id: 5, name: "City Lights", photoCount: 20, date: "March 2025", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 320 },
  { id: 6, name: "Beach Days", photoCount: 18, date: "February 2025", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 380 },
  { id: 7, name: "Holiday Magic", photoCount: 40, date: "January 2025", src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 340 },
  { id: 8, name: "Autumn Leaves", photoCount: 22, date: "December 2024", src: "https://images.unsplash.com/photo-1523438885200-7d3b7c10201f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 360 },
  { id: 9, name: "Winter Nights", photoCount: 15, date: "November 2024", src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 310 },
  { id: 10, name: "Spring Bloom", photoCount: 28, date: "October 2024", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 390 },
  { id: 11, name: "Road Trips", photoCount: 35, date: "September 2024", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 330 },
  { id: 12, name: "Festival Vibes", photoCount: 45, date: "August 2024", src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 370 },
  { id: 13, name: "Garden Parties", photoCount: 20, date: "July 2024", src: "https://images.unsplash.com/photo-1523438885200-7d3b7c10201f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 400 },
  { id: 14, name: "Rainy Days", photoCount: 17, date: "June 2024", src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 350 },
  { id: 15, name: "Starry Skies", photoCount: 25, date: "May 2024", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", height: 420 },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-secondary-light-mint flex flex-col">
      <Navbar />
      <div className="pt-[4rem] bg-secondary-light-mint">
        <HeaderNav />
      </div>

      <main className="flex-grow pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AlbumGrid albums={albums} />
      </main>

      <Footer className="w-full mt-auto" />
    </div>
  );
};

export default HomePage;
