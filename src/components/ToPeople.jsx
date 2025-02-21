import { MdSearch, MdMoreVert, MdPhone, MdChat } from "react-icons/md";
import { FiPlus, FiCheck, FiClock } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

const people = [
  {
    email: "xmitchell@hotmail.com",
    contact: "Lynn Tanner",
    provider: "Microsoft",
    status: "Verified",
  },
  {
    email: "tbaker@outlook.com",
    contact: "Capt. Trunk",
    provider: "Google",
    status: "Not yet contacted",
  },
  {
    email: "mgonzalez@aol.com",
    contact: "Thomas Anum",
    provider: "Google",
    status: "Not yet contacted",
  },
];

export default function TopPeople() {
  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-semibold">Top People</h3>
        <button className="ml-auto">
          <MdArrowOutward className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="relative flex-1">
          <MdSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-gray-300 bg-background px-9 py-2 text-sm focus:outline-none cursor-pointer"
          />
        </div>
        <button className="flex items-center gap-1 rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-accent cursor-pointer">
          <FiPlus className="h-4 w-4" />
          Add People
        </button>
      </div>

      <div className="min-w-full overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-sm text-muted-foreground">
              <th className="whitespace-nowrap px-4 py-3 text-left font-medium">
                <input type="checkbox" className="rounded border-muted cursor-pointer" />
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-400">EMAIL</th>
              <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-400">CONTACT</th>
              <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-400">EMAIL PROVIDER</th>
              <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-400">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.email} className="border text-sm">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded border-muted cursor-pointer" />
                </td>
                <td className="px-4 py-3">{person.email}</td>
                <td className="px-4 py-3">{person.contact}</td>
                <td className="px-4 py-3">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zzg3pD3WYcgqbUv7lWuBlYwJR6MrdJ.png"
                    alt={person.provider}
                    className="h-5 w-5"
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {person.status === "Verified" ? (
                      <>
                        <FiCheck className="h-4 w-4 text-blue-500" />
                        <span className="text-blue-500">Verified</span>
                      </>
                    ) : (
                      <>
                        <FiClock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Not yet contacted</span>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Floating Contact p */}
      <div className="fixed bottom-6 right-6 flex w-96 items-center gap-3 rounded-full border-b bg-background px-5 py-3 pr-4 shadow-lg">
        <img
          src="https://img.pikbest.com/origin/09/26/70/62VpIkbEsTv9G.png!sw800"
          alt="Benjamin Cooper"
          className="h-10 w-10 rounded-full"
        />
        <div className="mr-2">
          <div className="font-medium">Benjamin Cooper</div>
          <div className="text-sm text-muted-foreground">+123 456 789 101</div>
        </div>
        <div className="flex gap-1">
          <button className="rounded-full bg-red-500 p-2 text-white hover:bg-red-600 cursor-pointer">
            <MdPhone className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-teal-500 p-2 text-white hover:bg-teal-600 cursor-pointer">
            <MdChat className="h-5 w-5" />
          </button>
          <button className="rounded-full border p-2 hover:bg-accent cursor-pointer">
            <MdMoreVert className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
