import { useState } from "react";
import { Calendar, Camera, BarChartIcon as ChartBar, Eye, Inbox, LineChart, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
// import { p } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: Camera, slug: "/" },
  { name: "AI Lead Scout", icon: User },
  { name: "Email accounts", icon: Mail },
  { name: "Multibox", icon: Inbox },
  { name: "Analytics", icon: ChartBar, slug: "analytics" },
  { name: "Website visitors", icon: Eye },
  { name: "Pipeline", icon: LineChart },
  { name: "Calendar", icon: Calendar, slug: "calender" },
];

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-zinc-900 text-white cursor-pointer transition-all duration-300 z-10 ease-in-out ${isExpanded ? "w-48" : "w-16"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-4">
        <p  className={`flex items-center gap-2 overflow-hidden whitespace-nowrap font-semibold ${isExpanded ? "opacity-100" : "opacity-0"}`}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-orange-500">
            Q
          </div>
          <span>{isExpanded && "QuickPipe.Ai"}</span>
        </p>
      </div>

        <div className="flex justify-between">
            <nav className="mt-4 space-y-2 px-2">
                {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                    <p key={item.name}
                    className={`flex items-center gap-4 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-zinc-800 ${!isExpanded ? "justify-center" : ""}`}>
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className={`overflow-hidden whitespace-nowrap transition-opacity ${isExpanded ? "opacity-100" : "opacity-0 w-0"}`}>
                      <Link to={item?.slug}>
                        {item.name}
                      </Link>
                    </span>
                    </p>
                );
                })}
            </nav>
        </div>
    </div>
  );
}

export default Sidebar;