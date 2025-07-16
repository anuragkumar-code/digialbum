import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import HomePage from './pages/HomePage';
import CreateAlbum from './pages/CreateAlbum';
import Album from './pages/Album';

import About from './pages/About';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* <Route path="/homepage" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="/albums/new" element={<PrivateRoute><AlbumForm /></PrivateRoute>} />
            <Route path="/albums/:id" element={<PrivateRoute><Album /></PrivateRoute>} /> */}

            <Route path="/homepage" element={<HomePage />} />
            <Route path="/add-album" element={<CreateAlbum />} />
            <Route path="/album/:id" element={<Album />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join-us" element={<JoinUs />} />


            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;