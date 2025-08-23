import Link from "next/link"

export const metadata = { title: "Youth Boxing | 3rd Street Boxing Gym" }

export default function Page(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Youth Boxing</h1>
      <div className="prose max-w-none">
        <p>Ages 8–16. All coaches CPR certified. Focus on fun, respect, and growth.</p>
      </div>
    </div>
  )
}
