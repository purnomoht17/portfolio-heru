import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Contact from './pages/Contact/Contact.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './pages/Home/Home.css';

// eslint-disable-next-line react-refresh/only-export-components
function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1"> {/* Tambahkan flex-grow-1 agar konten mengisi ruang */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Definisikan rute/halaman Anda
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/resume", element: <Resume /> },
      { path: "/contact", element: <Contact /> }, // <-- TAMBAHKAN INI
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);