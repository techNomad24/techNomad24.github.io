import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import './Contact.css'; // Optional, for custom styles

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="my-4">Contact Me</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Email</h5>
                <p className="card-text">
                  <a href="mailto:example@example.com">example@example.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">LinkedIn</h5>
                <p className="card-text">
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">GitHub</h5>
                <p className="card-text">
                  <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">My GitHub</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
