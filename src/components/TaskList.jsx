import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md"

function TaskList() {
  const tasks = [
    {
      title: "Respond to Initial Inquiry",
      description: "Reply to Alex Carter with details on ta...",
      time: "9:00 PM",
      status: "upcoming",
    },
    {   
      title: "Schedule Meeting",
      description: "Confirm a meeting with Alex Carter fo...",
      time: "12 Mar 2025",
      status: "completed",
    },
    {
      title: "Schedule Meeting",
      description: "Confirm a meeting with Alex Carter fo...",
      time: "12 Mar 2025",
      status: "upcoming",
    },
  ]

  return (
    <div className="space-y-6">
      {tasks.map((task, i) => (
        <div key={i} className="flex items-start gap-3">
          {task.status === "completed" ? (
            <MdCheckBox className="h-5 w-5 text-primary cursor-pointer" />
          ) : (
            <MdCheckBoxOutlineBlank className="h-5 w-5 text-muted-foreground cursor-pointer" />
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={task.status === "completed" ? "line-through" : ""}>{task.title}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    task.status === "upcoming" ? "bg-purple-100 text-purple-600" : "bg-green-100 text-green-600"
                  }`}
                >
                  {task.status === "completed" ? "Completed" : "Upcoming"}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{task.description}</p>
            <p className="text-xs text-muted-foreground">{task.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList;