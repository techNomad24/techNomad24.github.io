import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const projectsData = [
  {
    title: 'University',
    description: 'Software Engineering 3 Years.',
    link: 'https://github.com/yourusername/project-one'
  },
  {
    title: 'Contributing Open Source',
    description: 'I Want to Start to contribute for FOSS Projects',
    link: 'https://github.com/yourusername/project-two'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="container my-4">
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {projectsData.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-3" key={index}>
            <div className="card h-100 shadow-sm border-light"> {/* Adjusted card border */}
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
