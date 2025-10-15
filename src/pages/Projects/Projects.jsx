import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectData.js'; // <-- Ubah sumber impor ke file baru

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
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              
              {/* Mapping dari projectsData */}
              {projectsData.map((project, index) => {
                // Tentukan urutan: jika index genap (0, 2, ...), gambar di kanan (order-md-2)
                // jika index ganjil (1, 3, ...), gambar di kiri (order-md-1)
                const isOdd = index % 2 !== 0; 

                // Untuk mobile (default), urutan adalah 1 (Gambar) lalu 2 (Teks)
                // Untuk desktop (md), atur urutan bergantian
                const imageOrderLg = isOdd ? 'order-lg-1' : 'order-lg-2';
                const textOrderLg = isOdd ? 'order-lg-2' : 'order-lg-1';

                return (
                  <div key={project.id} className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                    <div className="card-body p-0">
                      
                      {/* START: Perubahan Layout Grid */}
                      <div className="row gx-0">
                        
                        {/* Kolom Keterangan Teks (Selalu di bawah di mobile/default) */}
                        <div className={`col-lg-7 p-4 p-md-5 ${textOrderLg}`}>
                            <h2 className="fw-bolder">{project.title}</h2>
                            <p>{project.description}</p>
                            {/* Tambahkan Link atau Tombol jika ada */}
                            {project.link && (
                                <Link className="btn btn-primary mt-3" to={project.link}>Lihat Proyek</Link>
                            )}
                        </div>

                        {/* Kolom Gambar (Selalu di atas di mobile/default) */}
                        <div className={`col-lg-5 d-flex align-items-center ${imageOrderLg}`}>
                            <div className="p-0 bg-dark w-100 h-100">
                                {/* Ganti img-fluid dengan class yang memastikan gambar mengisi kolom */}
                                <img 
                                    className="img-fluid w-100 h-100 object-fit-cover" // Tambahkan w-100 h-100 dan object-fit-cover (jika didukung)
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                />
                            </div>
                        </div>

                      </div>
                      {/* END: Perubahan Layout Grid */}

                    </div>
                  </div>
                );
              })}
              {/* End Mapping */}

            </div>
          </div>
        </div>
      </section>

      {/* Call to action section */}
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