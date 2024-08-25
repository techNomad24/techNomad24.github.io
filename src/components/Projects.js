import React from 'react';
import './Projects.css'; // Optional, for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="my-4">Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Project One" />
              <div className="card-body">
                <h5 className="card-title">Project One</h5>
                <p className="card-text">A description of the first project. This project focuses on XYZ technologies and solutions.</p>
                <a href="https://example.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Project Two" />
              <div className="card-body">
                <h5 className="card-title">Project Two</h5>
                <p className="card-text">A description of the second project. This project highlights ABC techniques and results.</p>
                <a href="https://example.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Project Three" />
              <div className="card-body">
                <h5 className="card-title">Project Three</h5>
                <p className="card-text">A description of the third project. This project demonstrates DEF methodologies and achievements.</p>
                <a href="https://example.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
