import React from 'react';
import { resumeData } from '../../data/resumeData.js'; // Impor data dari file terpisah

function Resume() {
  return (
    <main className="flex-shrink-0">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            
            {/* Experience Section */}
            <section>
              {/* 💡 Perbaikan: Menggunakan flex-column (mobile) dan flex-md-row (desktop) */}
              {/* Urutan elemen di JSX diubah: Tombol dulu, baru Judul */}
              <div 
                className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-md-between mb-4"
              >
                
                {/* Tombol Resume (Akan muncul di atas pada mobile) */}
                <a 
                  className="btn btn-primary px-4 py-3 mb-3 mb-md-0" // Tambahkan mb-3 untuk jarak di mobile, mb-md-0 untuk menghapus di desktop
                  href="#!" 
                >
                  <div className="d-inline-block bi bi-download me-2"></div>
                  Download Resume
                </a>
                
                {/* Judul Experience (Akan muncul di bawah pada mobile) */}
                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
              </div>
              
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-primary fw-bolder mb-2">{exp.period}</div>
                          <div className="small fw-bolder">{exp.position}</div>
                          <div className="small text-muted">{exp.company}</div>
                          <div className="small text-muted">{exp.location}</div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div>{exp.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
            </section>

            {/* ... (Education Section tetap sama) ... */}
            <section>
              <h2 className="text-primary fw-bolder mb-4">Education</h2>
              {/* ... (konten Education) ... */}
            </section>
            
            {/* ... (Skills Section tetap sama) ... */}
            <section>
              <div className="card shadow border-0 rounded-4 mb-5">
                {/* ... (konten Skills) ... */}
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default Resume;