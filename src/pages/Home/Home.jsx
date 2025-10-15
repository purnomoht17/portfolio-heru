// src/pages/Home/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // 💡 Tambahkan impor Link
import './Home.css';
import profileImage from '../../assets/profile.png';

function Home() {
  return (
    <main className="flex-shrink-0">
      {/* Header */}
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              {/* Header text content */}
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div className="text-uppercase">Backend · API · Web Development</div>
                </div>
                <div className="fs-3 fw-light text-muted">Membangun sistem backend yang handal</div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">Belajar & Berkarya di Dunia Teknologi</span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  
                  {/* Tombol Resume: Menggunakan atribut 'download' agar langsung mengunduh file */}
                  <a 
                    className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" 
                    href="/resume.pdf" 
                    download="Heru_Purnomo_Resume.pdf" // 💡 Tambahkan atribut download
                  >
                    Resume
                  </a>
                  
                  {/* 💡 Perbaikan: Menggunakan Link component untuk navigasi internal */}
                  <Link 
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" 
                    to="/projects"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              {/* Header profile picture */}
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  <img className="profile-img" src={profileImage} alt="Profile" />
                  {/* ... Bagian SVG dots tetap di sini ... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>
                <p className="lead fw-light mb-4">
                  Halo! Saya Heru Purnomo, mahasiswa Teknik Informatika yang fokus pada pengembangan website.
                </p>
<p className="text-muted">
  Saat ini saya sedang mendalami <strong>backend development</strong>, 
  dengan fokus pada bagaimana merancang arsitektur sistem, mengelola basis data, 
  serta membangun API yang dapat diandalkan. Saya terus mengerjakan berbagai proyek pribadi 
  untuk mengasah keterampilan teknis, meningkatkan pemahaman konsep, 
  sekaligus memperluas wawasan saya tentang praktik terbaik dalam pengembangan perangkat lunak modern. 
  Portofolio ini menjadi bukti perjalanan belajar dan eksperimen saya di dunia teknologi.
</p>

                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a className="text-gradient" href="https://instagram.com/heru_purnomo17" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a className="text-gradient" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a className="text-gradient" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
