import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, Calendar1, CircleCheckBig } from "lucide-react"

function Calendar() {
  const [selectedView, setSelectedView] = useState("month");
  const [currentDate] = useState(new Date(2025, 0, 30)) // January 30, 2025

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    const startingDayIndex = firstDay.getDay()
    const daysInMonth = lastDay.getDate()

    const previousMonth = new Date(year, month, 0)
    const daysInPreviousMonth = previousMonth.getDate()

    const days = []

    // Previous month days
    for (let i = startingDayIndex - 1; i >= 0; i--) {
      days.push({
        date: daysInPreviousMonth - i,
        isCurrentMonth: false,
        events: [],
      })
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        isCurrentMonth: true,
        events: [
          // Sample events
          i === 2 && { type: "meeting", title: "Meeting with Carl Pei" },
          i === 2 && { type: "task", title: "Client Demo Task" },
          i === 14 && { type: "meeting", title: "Meeting with Carl Pei" },
          i === 14 && { type: "task", title: "Client Demo Task" },
        ].filter(Boolean),
      })
    }

    return days
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl flex items-center gap-2 font-semibold"> <Calendar1 /> 30 Jan 2025</h1>
              <p className="text-[16px] text-muted-foreground text-gray-400">Manage your reminders, events and meetings</p>
            </div>
            <div className="flex items-center gap-2">
            <div className="flex rounded-full bg-gray-200 p-1">
              <button
                className={`px-4 py-2 rounded-full cursor-pointer text-sm transition-all duration-300 ${
                  selectedView === "month" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-400"
                }`}
                onClick={() => setSelectedView("month")}
              >
                Month view
              </button>
              <button
                className={`px-4 py-2 rounded-full cursor-pointer text-sm transition-all duration-300 ${
                  selectedView === "week" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-400"
                }`}
                onClick={() => setSelectedView("week")}
              >
                Week view
              </button>
            </div>
              <div className="flex gap-3">
                <button size="icon" className="border border-gray-400 p-2.5 rounded-full bg-gray-100">
                  <ChevronLeft size={20} className="text-gray-400" />
                </button>
                <button  size="icon" className="border border-gray-400 p-2.5 rounded-full bg-gray-100">
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              </div>
              <button className=" flex gap-2 rounded-full py-2 px-5 items-center text-white bg-[rgb(21,163,149)] hover:bg-teal-600">
                <Plus size={21} />
                New
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="py-3">
        <div className="grid grid-cols-7">
        {daysOfWeek.map((day) => (
            <div key={day} className="px-3 text-[17px] text-gray-500">
            {day}
            </div>
        ))}
        </div>
        <div className="border border-gray-300 rounded-lg">
          {/* Days header */}

          {/* Calendar days */}
          <div className="grid grid-cols-7">
            {generateCalendarDays().map((day, index) => (
              <div
                key={index}
                className={`min-h-[120px] p-2 border-r border-b border-gray-300 ${
                    !day.isCurrentMonth ? "bg-gray-50" : ""
                }`}
                >
                <span className={`text-sm font-medium ${!day.isCurrentMonth ? "text-gray-400" : ""}`}>{day.date}</span>
                <div className="mt-1 space-y-1">
                  {day.events.map((event, eventIndex) => (
                      <div
                      key={eventIndex}
                      className={`text-xs p-1 flex gap-1 ps-3 rounded font-medium ${
                        event.type === "meeting" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-600"
                    }`}
                    >
                      <CircleCheckBig size={14} /> {event.title}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Calendar;