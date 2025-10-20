import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectData.js'; 

// ---------------------------------------------------------------
// 💡 SOLUSI VITE: import.meta.glob (Untuk Mengimpor Aset Lokal)
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


function Projects() {
  
  return (
    <main className="flex-shrink-0">
      {/* Projects Section */}
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
            <p className="lead fw-light mb-0">Portofolio proyek backend dan API yang saya kerjakan.</p> 
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              
              {/* Mapping dari projectsData */}
              {projectsData.map((project) => {
                
                const projectImage = getImageUrl(project.filename);
                
                // Kelas rounded-top-4 adalah versi Bootstrap dari rounded-xl yang Anda gunakan di :root
                const imageRoundedClasses = projectImage 
                    ? `rounded-top-4` // Gambar hanya membulat di bagian atas
                    : '';

                return (
                  // Kartu Proyek
                  <div key={project.id} className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                    
                    {/* --- HEADER GAMBAR 16:9 (DI ATAS CARD) --- */}
                    {projectImage && (
                      // Menggunakan div card-header untuk bagian atas kartu
                      <div className={`card-header p-0 bg-dark ${imageRoundedClasses}`}> 
                          {/* Pembungkus Ratio 16:9 */}
                          <div className="ratio ratio-16x9">
                            <img 
                                // Gambar mengisi area 16:9
                                className="img-fluid w-100 h-100 object-fit-cover" 
                                src={projectImage} 
                                alt={project.title} 
                            />
                          </div>
                      </div>
                    )}
                    
                    {/* --- DETAIL PROYEK (BODY CARD) --- */}
                    <div className="card-body p-4 p-md-5">
                      
                        {/* Judul Proyek */}
                        <h2 className="fw-bolder mb-3">{project.title}</h2>
                        
                        {/* Tech Stack (Badge) */}
                        {project.techStack && project.techStack.length > 0 && (
                            <div className="mb-4">
                                <h4 className="fw-bolder fs-6 text-primary">Tech Stack:</h4>
                                <div className="d-flex flex-wrap gap-2"> 
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="badge bg-light text-dark fw-bolder p-2 rounded-pill border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Deskripsi */}
                        <p className="text-muted">{project.description}</p>
                        
                        {/* Link atau Tombol */}
                        {project.link && (
                            <Link className="btn btn-primary mt-3" to={project.link} target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-box-arrow-up-right me-2"></i> 
                                Lihat Repositori / Demo
                            </Link>
                        )}
                    </div>
                    {/* END: DETAIL PROYEK */}

                  </div>
                );
              })}
              {/* End Mapping */}

            </div>
          </div>
        </div>
      </section>

      {/* Call to action section (Tetap Sama) */}
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
            <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/contact">Contact me</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
