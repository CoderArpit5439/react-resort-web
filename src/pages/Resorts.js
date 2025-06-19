import React from 'react';
import resorts from '../data/resorts';
import ResortCard from '../components/ResortCard';

function Resorts() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">All Resorts</h2>
      <div className="row">
        {resorts.map(resort => (
          <div key={resort.id} className="col-md-6 col-lg-4 mb-4">
            <ResortCard resort={resort} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resorts;
