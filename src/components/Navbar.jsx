import React, { useState } from 'react'
import { FiChevronDown, FiMenu } from "react-icons/fi"
import { Bell } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-300 px-4 md:px-20">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Left Section */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600">
            <FiMenu size={24} />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>

          {/* Nav Links (Hidden on Mobile) */}
          <nav className={`absolute top-14 left-0 w-full bg-white shadow-md md:shadow-none md:static md:flex gap-6 p-4 md:p-0 ${isOpen ? "block" : "hidden md:flex"}`}>
            <a href="#" className="border-b-2 border-primary px-1 py-2 text-lg text-gray-600 block md:inline">
              Home
            </a>
            <a href="#" className="px-1 py-2 text-lg text-gray-600 block md:inline">
              ⚡ AI CRM
            </a>
            <a href="#" className="px-1 py-2 text-lg text-gray-600 block md:inline">
              Campaigns
            </a>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-gray-200 p-2 hover:bg-accent cursor-pointer">
            <Bell size={25} className="text-gray-400" />
          </button>
          <button className="flex items-center gap-2 rounded-full border px-3 py-1.5 cursor-pointer">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KzGtb03BbRdImya2RNtKi5cpR0WMBH.png"
              alt="Profile"
              className="h-6 w-6 rounded-full"
            />
            <span className="text-sm">My Organization</span>
            <FiChevronDown className="h-4 w-4 text-gray-500" />
          </button>
        </div>

      </div>
    </header>
  )
}

export default Navbar
