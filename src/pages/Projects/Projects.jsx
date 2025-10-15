import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectData.js'; 

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
            <p className="lead fw-light mb-0">Solusi backend yang handal, dari desain API hingga basis data.</p> 
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              
              {/* Mapping dari projectsData */}
              {projectsData.map((project) => (
                <div key={project.id} className="card shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-4 p-md-5">
                      
                      {/* 1. Project Title and Type */}
                      <div className="d-flex align-items-center mb-4">
                            <h2 className="fw-bolder mb-0">{project.title}</h2>
                            {/* Tambahkan badge kecil untuk tipe proyek, e.g., Backend, API, Microservice */}
                            <span className="badge bg-secondary ms-3">Backend</span> 
                      </div>
                      
                      {/* 2. Tech Stack (Gunakan badge untuk tampilan yang menarik) */}
                      <div className="mb-4">
                          <h4 className="fw-bolder fs-5 text-primary">Tech Stack:</h4>
                          {/* Asumsi project.techStack adalah array of strings */}
                          {project.techStack && project.techStack.map((tech, i) => (
                              <span key={i} className="badge bg-light text-dark fw-bolder me-2 mb-2 p-2">
                                  {tech}
                              </span>
                          ))}
                      </div>

                      {/* 3. Description/Problem Solved */}
                      <div className="mb-4">
                          <h4 className="fw-bolder fs-5 text-primary">Deskripsi:</h4>
                          <p className="lead">{project.description}</p>
                      </div>

                      {/* 4. Project Link/Button */}
                      {project.link && (
                          <Link className="btn btn-primary px-4 py-2" to={project.link}>
                            <i className="bi bi-box-arrow-up-right me-2"></i> 
                            Lihat Repositori / Demo
                          </Link>
                      )}

                  </div>
                </div>
              ))}
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