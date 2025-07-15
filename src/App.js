import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import HomePage from './pages/HomePage';
import AlbumForm from './components/AlbumForm';
import Album from './components/Album';
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
            <Route path="/albums/new" element={<AlbumForm />} />
            <Route path="/albums/:id" element={<Album />} />

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