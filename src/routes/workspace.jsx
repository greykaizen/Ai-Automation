import React, { useState } from 'react';

const WorkspaceMembers = () => {
    const [workspaceData, setWorkspaceData] = useState({
        name: 'My Organization',
        id: '+12304560713'
    });

    const [activeTab, setActiveTab] = useState('team');

    const [members] = useState([
        { id: 1, name: 'Beetoo Leru', role: 'Owner', avatar: '👤', color: 'bg-yellow-100' },
        { id: 2, name: 'Kaiya Donin', role: 'Editor', avatar: '👤', color: 'bg-purple-100' }
    ]);

    const handleWorkspaceChange = (e) => {
        const { name, value } = e.target;
        setWorkspaceData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(workspaceData.id);
        // Add toast notification logic here if needed
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen flex justify-center">
            <div className="w-full max-w-3xl">
                {/* Navigation Tabs */}
                <div className="mb-8 border-b border-gray-200">
                    <nav className="flex space-x-8">
                        <button className="py-4 px-1 text-gray-500 font-medium">
                            Profile
                        </button>
                        <button className="py-4 px-1 border-b-2 border-green-500 text-green-500 font-medium">
                            Workspace & members
                        </button>
                        <button className="py-4 px-1 text-gray-500 font-medium">
                            Integrations
                        </button>
                    </nav>
                </div>

                {/* Workspace Section */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Worspace</h2>
                    <div className="bg-white rounded-lg shadow p-6">
                        {/* Workspace Name */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                Workspace name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={workspaceData.name}
                                onChange={handleWorkspaceChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        {/* Workspace ID */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                Worskpace ID
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={workspaceData.id}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                                />
                                <button
                                    onClick={copyToClipboard}
                                    className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Members Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Members</h2>
                    <div className="bg-white rounded-lg shadow">
                        {/* Member Tabs */}
                        <div className="border-b border-gray-200 px-6 flex justify-between items-center">
                            <div className="flex space-x-6">
                                <button
                                    onClick={() => setActiveTab('team')}
                                    className={`py-4 px-1 font-medium relative ${activeTab === 'team'
                                            ? 'text-green-500 border-b-2 border-green-500'
                                            : 'text-gray-500'
                                        }`}
                                >
                                    The Team
                                </button>
                                <button
                                    onClick={() => setActiveTab('pending')}
                                    className={`py-4 px-1 font-medium ${activeTab === 'pending'
                                            ? 'text-green-500 border-b-2 border-green-500'
                                            : 'text-gray-500'
                                        }`}
                                >
                                    Pending Invitations
                                </button>
                            </div>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full flex items-center">
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                                </svg>
                                Add Member
                            </button>
                        </div>

                        {/* Member List */}
                        <div className="p-6">
                            {activeTab === 'team' ? (
                                <div className="space-y-4">
                                    {members.map(member => (
                                        <div key={member.id} className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className={`w-10 h-10 ${member.color} rounded-full flex items-center justify-center mr-3`}>
                                                    <span>{member.avatar}</span>
                                                </div>
                                                <span className="font-medium">{member.name}</span>
                                            </div>
                                            <span className="text-gray-500">{member.role}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center p-4 text-gray-500">
                                    No pending invitations
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkspaceMembers;