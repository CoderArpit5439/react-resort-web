import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">About ResortFinder</h2>
      <p className="lead">ResortFinder is your one-stop platform to discover the most beautiful and comfortable resorts across India. Whether you’re looking for a beachside stay or a mountain retreat, we’ve got you covered.</p>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src="/images/about1.jpg" className="img-fluid rounded" alt="About ResortFinder" />
        </div>
        <div className="col-md-6">
          <p>Our goal is to simplify your travel planning with a curated list of resorts that offer the best hospitality, views, and experiences. This site is a static prototype to visualize how a resort booking platform can look and feel using React and Bootstrap.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
