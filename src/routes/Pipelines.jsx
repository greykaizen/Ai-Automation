import React from 'react';

const Pipelines = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Pipelines</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Pipeline 1</h2>
          <p className="text-gray-600">Some details here...</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Pipeline 2</h2>
          <p className="text-gray-600">More details...</p>
        </div>
      </div>
    </div>
  );
};

export default Pipelines;