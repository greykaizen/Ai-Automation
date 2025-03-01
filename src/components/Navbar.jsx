import React, { useState, useEffect } from 'react';
import { 
  Bell, ChevronDown, Sparkles, User, HelpCircle, Settings, LogOut, 
  Building2, Plus, X, Briefcase 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isOrgOpen, setIsOrgOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceID, setWorkspaceID] = useState(uuidv4()); 
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown") && !event.target.closest(".modal")) {
        setIsProfileOpen(false);
        setIsOrgOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken"); 
    sessionStorage.removeItem("userToken");
    navigate('/login');
  };

  const handleCreateWorkspace = () => {
    console.log("New Workspace Created:", workspaceName, workspaceID);
    setIsModalOpen(false);
    setWorkspaceName('');
    setWorkspaceID(uuidv4());
  };

  return (
    <>
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold">Dashboard</span>
            </div>

            {/* Right side - Notifications and Profile */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-500" />
              </button>

              {/* Profile Dropdown */}
              <div className="relative dropdown">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsProfileOpen(!isProfileOpen);
                    setIsOrgOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Help Center
                    </a>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Organization Dropdown */}
              <div className="relative dropdown">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOrgOpen(!isOrgOpen);
                    setIsProfileOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 pr-4"
                >
                  <Building2 className="w-5 h-5" />
                  <span>My Organization</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isOrgOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-10 border">
                    {/* Search Input */}
                    <div className="px-3 pb-2">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none"
                      />
                    </div>

                    {/* Organization List */}
                    <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                      <span className="text-sm font-medium">My Organization</span>
                    </div>

                    {/* Create Workspace Button */}
                    <div 
                      className="px-3 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      <span className="text-sm">Create Workspace</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </nav>

      {/* Modal for Creating Workspace */}
      {isModalOpen && (<div className="fixed inset-0 flex items-center justify-center">

          <div className="bg-white w-96 p-6 rounded-lg shadow-lg modal">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Create New Workspace</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Briefcase className="w-4 h-4 mr-2" />
                Workspace Name
              </label>
              <input
                type="text"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none"
                placeholder="Enter workspace name"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Briefcase className="w-4 h-4 mr-2" />
                Workspace ID
              </label>
              <input
                type="text"
                value={workspaceID}
                readOnly
                className="w-full p-2 mt-1 border bg-gray-100 rounded-md focus:outline-none"
              />
            </div>

            <div className="mt-6 flex justify-between">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 border rounded-md">
                Cancel
              </button>
              <button 
                onClick={handleCreateWorkspace} 
                className="px-4 py-2 bg-teal-500 text-white rounded-md flex items-center"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Create Workspace
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
