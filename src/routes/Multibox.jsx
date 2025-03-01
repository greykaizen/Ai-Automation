import React, { useState } from "react";
import { FaSearch, FaPlus, FaEllipsisH } from "react-icons/fa";

const emails = [
  { id: 1, name: "Casper Nelly", initials: "CN", bgColor: "bg-yellow-500", subject: "Re: Request for Overview of Your Solutions", time: "7 hrs ago", unread: true },
  { id: 2, name: "Phillip Passaquindici", initials: "PP", bgColor: "bg-red-500", subject: "Re: Request for Overview of Your Solutions", time: "7 hrs ago", unread: false },
  { id: 3, name: "Anika Rosser", initials: "AR", bgColor: "bg-green-500", subject: "Re: Request for Overview of Your Solutions", time: "7 hrs ago", unread: false },
];

const Inbox = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-200 text-gray-400 pl-[120px]">
      {/* Sidebar */}
      <div className="w-[40%] p-6 border-r border-gray-300 bg-white rounded-2xl mr-6">
        <div className="mb-4 flex space-x-4">
          <span className="text-green-500 border-b-2 border-green-500">All Inboxes</span>
          <span className="text-green-500 border-b-2 border-green-500">Emails</span>
          <span className="text-green-500 border-b-2 border-green-500">SMS</span>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search emails..."
            className="w-full p-2 border border-gray-300 rounded-full pl-10"
          />
        </div>
        <div>
          {emails.map((email) => (
            <div
              key={email.id}
              onClick={() => setSelectedEmail(email)}
              className={`p-4 border-b border-gray-200 flex items-center justify-between cursor-pointer rounded-lg transition-colors ${selectedEmail?.id === email.id ? "bg-[#58b593] text-white" : "hover:bg-[#f5fffb]"} ${email.unread ? "font-bold" : "font-normal"}`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${email.bgColor}`}> 
                  {email.initials} 
                </div>
                <div>
                  <p>{email.name}</p>
                  <p className="text-sm">{email.subject}</p>
                </div>
              </div>
              <span className="text-sm">{email.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white rounded-2xl p-6">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-100 rounded">Archive</button>
            <button className="p-2 bg-gray-100 rounded">Snooze</button>
            <button className="p-2 bg-gray-100 rounded">Delete</button>
          </div>
          <button className="p-2 bg-gray-100 rounded">About Lead</button>
        </div>
        {selectedEmail ? (
          <div className="w-full">
            <h2 className="text-xl font-bold mb-2">{selectedEmail.subject}</h2>
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${selectedEmail.bgColor}`}>{selectedEmail.initials}</div>
              <div className="ml-3">
                <p className="font-bold">{selectedEmail.name}</p>
                <p className="text-sm text-gray-500">To: support@quickpipe.com</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">{selectedEmail.time}</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-gray-700">Hi Support Team,</p>
              <p className="text-gray-700 mt-2">My name is Alex Carter, and I work as a Sales Representative at Greenfield Solutions. We’re currently exploring tools to help us scale our team operations effectively, particularly in areas like client follow-ups, reporting, and team collaboration.</p>
              <p className="text-gray-700 mt-2">Would it be possible to set up a meeting to discuss this further? I’m generally available on weekdays after 1 PM and can adjust if needed. Looking forward to your insights!</p>
              <p className="text-gray-700 mt-4">Best regards,</p>
              <p className="text-gray-700">Alex Carter</p>
            </div>
            <div className="flex justify-end mt-4">
              <button className="p-3 bg-green-500 text-white rounded-lg">Reply</button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p>Click to view</p>
            <div className="w-16 h-16 mx-auto bg-blue-100 p-4 rounded-full">
              <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-4 right-4">
        <button className="p-4 bg-green-500 text-white rounded-full flex items-center">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Inbox;
