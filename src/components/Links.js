import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import './Links.css'; // Optional, for custom styles

const linksData = [
  { title: 'Blog', description: 'Read my latest blog posts.', url: '/blog' },
  { title: 'Financial Update', description: 'Check out the latest financial updates.', url: '/financial-update' }
];

const Links = () => {
  return (
    <section className="links">
      <div className="container">
        <h2 className="my-4">Explore</h2>
        <div className="row">
          {linksData.map((link, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{link.title}</h5>
                  <p className="card-text">{link.description}</p>
                  <a href={link.url} className="btn btn-primary mt-3" target="_blank" rel="noopener noreferrer">
                    Go to {link.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
