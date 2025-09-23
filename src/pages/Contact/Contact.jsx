import React from 'react';
import './Contact.css';

function Contact() {
  const whatsappNumber = '6285212829415'; // Ganti dengan nomor WhatsApp Anda
  const instagramUsername = 'heru_purnomo17'; // Ganti dengan username Instagram Anda
  const emailAddress = 'purnomoht17@gmail.com'; // Ganti dengan alamat email Anda
  const linkedinUsername = 'heru-purnomo17'; // Ganti dengan username LinkedIn Anda

  return (
    <main className="flex-shrink-0">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Get in Touch</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {/* WhatsApp Card */}
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-decoration-none"
            >
              <div className="card shadow border-0 rounded-4 mb-5 contact-card">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i className="bi bi-whatsapp"></i>
                    </div>
                    <div>
                      <h5 className="fw-bolder text-dark mb-0">WhatsApp</h5>
                      <p className="text-muted mb-0">+{whatsappNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a 
              href={`https://www.instagram.com/${instagramUsername}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-decoration-none"
            >
              <div className="card shadow border-0 rounded-4 mb-5 contact-card">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i className="bi bi-instagram"></i>
                    </div>
                    <div>
                      <h5 className="fw-bolder text-dark mb-0">Instagram</h5>
                      <p className="text-muted mb-0">@{instagramUsername}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* LinkedIn Card -- BARU DITAMBAHKAN */}
            <a 
              href={`https://www.linkedin.com/in/${linkedinUsername}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-decoration-none"
            >
              <div className="card shadow border-0 rounded-4 mb-5 contact-card">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i className="bi bi-linkedin"></i>
                    </div>
                    <div>
                      <h5 className="fw-bolder text-dark mb-0">LinkedIn</h5>
                      <p className="text-muted mb-0">{linkedinUsername}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href={`mailto:${emailAddress}`} 
              className="text-decoration-none"
            >
              <div className="card shadow border-0 rounded-4 mb-5 contact-card">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <h5 className="fw-bolder text-dark mb-0">Email</h5>
                      <p className="text-muted mb-0">{emailAddress}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;