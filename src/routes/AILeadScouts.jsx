// Sidebar.js
import React from 'react';
import {
  FaBriefcase, FaMapMarkerAlt, FaIndustry, FaUsers, FaDollarSign,
  FaGlobe, FaCogs, FaMoneyCheckAlt, FaUser, FaBuilding
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-[300px] bg-white border border-gray-200 rounded-2xl h-screen flex flex-col ml-[87px]">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold mb-[40px]">Search Manually</h2>
        <div className="flex items-center justify-between">
          <FaMapMarkerAlt />
          <span className="text-xl text-gray-500">Skip already owned</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {/* Sidebar Menu Items */}
      <nav className="flex-1 p-2 space-y-4">
        {/* Job Titles */}
        <div className="w-full p-2 rounded text-xl text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FaBriefcase />
          <span className='pl-[15px]'>Job titles</span>
        </div>

        {/* Location */}
        <div className="w-full p-2 rounded text-xl text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FaMapMarkerAlt />
          <span className='pl-[15px]'>Location</span>
        </div>

        {/* Industry & Keywords */}
        <div className="w-full p-2 rounded text-xl text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FaIndustry />
          <span className='pl-[15px]'>Industry & Keywords</span>
        </div>

        {/* Employees */}
        <div className="w-full p-2 rounded text-xl text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FaUsers />
          <span className='pl-[15px]'>Employees</span>
        </div>

        {/* Revenue */}
        <div className="w-full p-2 rounded text-xl text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FaDollarSign />
          <span className='pl-[15px]'>Revenue</span>
        </div>

        {/* Lookalike domain */}
        <div className="w-full p-2 rounded text-xl text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FaGlobe />
          <span className='pl-[15px]'>Lookalike domain</span>
        </div>

        {/* Technologies */}
        <div className="w-full p-2 rounded text-xl text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FaCogs />
          <span className='pl-[15px]'>Technologies</span>
        </div>

        {/* Funding type */}
        <div className="w-full p-2 rounded text-xl text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FaMoneyCheckAlt />
          <span className='pl-[15px]'>Funding type</span>
        </div>

        {/* Name */}
        <div className="w-full p-2 rounded text-xl text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FaUser />
          <span className='pl-[15px]'>Name</span>
        </div>

        {/* Company */}
        <div className="w-full p-2 rounded text-xl text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
          <FaBuilding />
          <span className='pl-[15px]'>Company</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;