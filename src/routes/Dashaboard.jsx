
import { Mail, ChevronRight, BarChart3, Ratio } from "lucide-react"
import MetricCard from "../components/MetricCard"
import LiveFeed from "../components/LiveFeed"
import TaskList from "../components/TaskList"
import StatsChart from "../components/StartChart"
import TopPeople from "../components/ToPeople"


export default function DashboardPage() {
  return (
    <div className='ps-18 bg-[rgb(255,255,255)]'>
    <div className="min-h-screen bg-background">

      <main className="container mx-auto p-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Evening, Beetoo 👋</h2>
            <p className="text-sm text-gray-400 text-semibold">Track your activities, leads, analytics and more</p>
          </div>
          <button className="flex items-center gap-2 bg-[rgb(21,163,149)] rounded-full bg-primary px-4 py-2 text-white cursor-pointer">
            <Ratio className="h-5 w-5" />
            {/* <MdAdd /> */}
            Add widget 
          </button>
        </div>

        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard icon="mail" label="Emails Sent" value="1,245" iconColor="text-blue-600" bgColor="bg-blue-100" />
            <MetricCard icon="users" label="New Users" value="312" iconColor="text-green-600" bgColor="bg-green-100" />
            <MetricCard icon="calendar" label="Meetings" value="27" iconColor="text-purple-600" bgColor="bg-purple-100" />
            <MetricCard icon="briefcase" label="Projects" value="8" iconColor="text-orange-600" bgColor="bg-orange-100" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="p-6 border-none rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-[0_4px_10px_rgba(45,212,191,0.4)]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Live feed</h3>
            </div>
            <LiveFeed />
          </div>
          <div className="p-6 border-none rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-[0_4px_10px_rgba(45,212,191,0.4)]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Stats</h3>
              <div className="flex gap-2">
                <button className="rounded-full bg-accent px-3 py-1 text-sm cursor-pointer">Weekly</button>
                <button className="rounded-full px-3 py-1 text-sm text-muted-foreground cursor-pointer">Monthly</button>
              </div>
            </div>
            <StatsChart />
          </div>
          <div className="p-6 border-none rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-[0_4px_10px_rgba(45,212,191,0.4)]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Tasks</h3>
              <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-600">5 New</span>
            </div>
            <div className="min-h-[400px]">
              <TaskList />
            </div>
          </div>
        </div>

        {/* Updated Top People section with max-width */}
        <div className="mt-6 max-w-[60%]  border-none rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-[0_4px_10px_rgba(45,212,191,0.4)]">
          <TopPeople />
        </div>
      </main>
    </div>
</div> 
  )
}