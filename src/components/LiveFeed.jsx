import { FiCircle } from "react-icons/fi"

function LiveFeed() {
  const feedItems = [
    {
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KzGtb03BbRdImya2RNtKi5cpR0WMBH.png",
      name: "Benjamin Cooper",
      role: "CEO @ Meta Inc.",
      subject: "Re: Meeting with Lead",
      status: "Clicked",
      statusColor: "bg-purple-500",
      time: "5s ago",
    },
    {
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KzGtb03BbRdImya2RNtKi5cpR0WMBH.png",
      name: "Casper Nelly",
      role: "Sales manager @ pwc",
      subject: "Re: sales marketing",
      status: "Hot Lead",
      statusColor: "bg-orange-500",
      time: "7 hrs ago",
    },
    {
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KzGtb03BbRdImya2RNtKi5cpR0WMBH.png",
      name: "Philip Oroni",
      role: "Designer @ QuickPipe AI",
      subject: "Re: Email about design work",
      status: "Opened",
      statusColor: "bg-green-500",
      time: "2 days ago",
    },
  ]

  return (
    <div className="space-y-4">
      {feedItems.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <img src={item.avatar || "/placeholder.svg"} alt={item.name} className="h-8 w-8 rounded-full" />
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-medium">{item.name}</span>
              <span className="text-xs text-muted-foreground">{item.role}</span>
            </div>
            <div className="text-sm">{item.subject}</div>
            <div className="flex items-center gap-2">
              <FiCircle className={`h-2 w-2 fill-current ${item.statusColor}`} />
              <span className="text-xs">{item.status}</span>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LiveFeed;