import React from 'react'
import { FiChevronDown } from "react-icons/fi"
import { Bell } from 'lucide-react'

function Navbar() {
  return (
 <header className="border-b border-gray-300 px-20">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-8 justify-between">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <nav className="flex gap-6">
              <a href="#" className="border-b-2 border-primary px-1 py-3 text-lg text-gray-400">
                Home
              </a>
              <a href="#" className="px-1 py-3 text-lg text-gray-400">
                ⚡ AI CRM
              </a>
              <a href="#" className="px-1 py-3 text-lg text-gray-400">
                Campaigns
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-gray-200 p-2 hover:bg-accent cursor-pointer">
              <Bell size={25} className=" text-gray-400" />
            </button>
            <button className="flex items-center gap-2 rounded-full border px-3 py-1.5 cursor-pointer">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KzGtb03BbRdImya2RNtKi5cpR0WMBH.png"
                alt="Profile"
                className="h-6 w-6 rounded-full"
              />
              <span className="text-sm">My Organization</span>
              <FiChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>
  )
}

export default Navbar