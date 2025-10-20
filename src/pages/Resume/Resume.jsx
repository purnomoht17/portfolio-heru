// src/pages/Resume/Resume.jsx

import React from 'react';
import { resumeData } from '../../data/resumeData.js'; // Impor data dari file terpisah

// ---------------------------------------------------------------
// 💡 SOLUSI VITE: import.meta.glob
// Mengimpor semua aset gambar secara otomatis dan EAGER (sinkron)
const imageModules = import.meta.glob('../../assets/*.{png,jpg,jpeg,svg,JPG}', { eager: true }); 

// Fungsi untuk mendapatkan URL gambar dari nama file (misal: 'logo.png')
const getImageUrl = (imageName) => {
    if (!imageName) return null;
    
    // Bangun path relatif yang digunakan oleh glob
    const fullPath = `../../assets/${imageName}`;
    
    // Cari modul yang cocok dan ambil default URL-nya
    const module = imageModules[fullPath];
    
    return module ? module.default : null;
};
// ---------------------------------------------------------------


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
              {/* Tombol Download & Judul Experience */}
              <div 
                className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-md-between mb-4"
              >
                
                <a 
                  className="btn btn-primary px-4 py-3 mb-3 mb-md-0" 
                  href="/Heru_Purnomo_Resume.pdf" 
                  download="Heru_Purnomo_Resume.pdf" 
                >
                  <div className="d-inline-block bi bi-download me-2"></div>
                  Download Resume
                </a>
                
                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
              </div>
              
              {/* Mapping Data Pengalaman */}
              {resumeData.experience.map((exp) => {
                // Ambil URL gambar menggunakan fungsi helper
                const imageUrl = exp.image ? getImageUrl(exp.image) : null;
                
                // Menggunakan rounded-4 yang didefinisikan di :root (1rem)
                const imageRoundedClasses = imageUrl ? `rounded-top-4` : ''; 

                return (
                  <div key={exp.id} className="card shadow border-0 rounded-4 mb-5">
                    
                    {/* --- HEADER GAMBAR (DI ATAS CARD) --- */}
                    {imageUrl && (
                      // Menggunakan card-header dengan p-0 untuk menghilangkan padding
                      // Hapus mb-4 dari div ini jika ada, card-header secara default sudah tanpa padding di p-0
                      <div className={`card-header p-0 bg-light ${imageRoundedClasses}`}> 
                          {/* Kontainer gambar tanpa rasio tetap, disarankan rasio 16:9 
                              Jika rasio 16:9 diperlukan, tambahkan class ratio ratio-16x9 di sini. */}
                          <img
                              src={imageUrl} 
                              alt={`${exp.company} logo`}
                              // 💡 FIX: Tambahkan d-block untuk menghilangkan margin bawah inline image
                              className="img-fluid experience-logo-full d-block mb-0" 
                          />
                      </div>
                    )}
                    
                    {/* --- CARD BODY (DETAIL PENGALAMAN) --- */}
                    {/* Hapus p-5 dari card-body, tambahkan padding di div inner jika perlu 
                        Namun, kita pertahankan p-5 agar detail tetap memiliki padding standar. */}
                    <div className="card-body p-4 p-md-5"> 
                      
                      {/* GRID/ROW UNTUK DETAIL POSISI DAN DESKRIPSI (Sejajar) */}
                      <div className="row gx-5">
                          
                          {/* Kolom Kiri: Detail Posisi (col-lg-4) */}
                          <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                              <div className="bg-light p-4 rounded-4">
                                  <div className="text-primary fw-bolder mb-2">{exp.period}</div>
                                  <div className="small fw-bolder">{exp.position}</div>
                                  <div className="small text-muted">{exp.company}</div>
                                  <div className="small text-muted">{exp.location}</div>
                              </div>
                          </div>
                          
                          {/* Kolom Kanan: Deskripsi (col-lg-8) */}
                          <div className="col-lg-8">
                              <div>{exp.description}</div>
                          </div>
                      </div>

                    </div>
                  </div>
                );
              })}
              
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-secondary fw-bolder mb-4">Education</h2>
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-secondary fw-bolder mb-2">{edu.period}</div>
                          <div className="mb-2">
                            <div className="small fw-bolder">{edu.school}</div>
                            <div className="small text-muted">{edu.location}</div>
                          </div>
                          <div className="fst-italic">
                            <div className="small text-muted">{edu.degree}</div>
                            <div className="small text-muted">{edu.field}</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8"><div>{edu.description}</div></div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            
            <div className="pb-5"></div>

            {/* Skills Section (Kode tetap sama) */}
            <section>
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  {/* Professional skills list */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                      <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
                    </div>
                    {/* Menggunakan satu .map() dengan kelas g-4 untuk jarak otomatis */}
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      {resumeData.professionalSkills.map(skill => (
                        <div key={skill.id} className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">{skill.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Languages list */}
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                      <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Technique Skills</span></h3>
                    </div>
                     {/* Menggunakan satu .map() dengan kelas g-4 untuk jarak otomatis */}
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      {resumeData.languages.map(lang => (
                        <div key={lang.id} className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">{lang.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Resume;
