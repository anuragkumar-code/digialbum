import React from "react";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import HeaderNav from "../components/Shared/HeaderNav";
import AlbumForm from "../components/Shared/AlbumForm";

const CreateAlbum = () => {
  const handleAlbumSubmit = (data) => {
    console.log("Submitted album data:", data);
  };

  return (
    <div className="min-h-screen bg-secondary-light-mint flex flex-col">
      <Navbar />
      <div className="pt-[4rem] bg-secondary-light-mint">
        <HeaderNav />
      </div>

      <main className="flex-grow pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <AlbumForm onSubmit={handleAlbumSubmit} />
      </main>

      <Footer className="w-full mt-auto" />
    </div>
  );
};

export default CreateAlbum;
