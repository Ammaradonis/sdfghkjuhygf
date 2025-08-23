import Link from "next/link"

export const metadata = { title: "Schedule | 3rd Street Boxing Gym" }

export default function Page(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Schedule</h1>
      <div className="prose max-w-none">
        <p>Interactive weekly schedule with filters and direct booking.</p>
      </div>
    </div>
  )
}
