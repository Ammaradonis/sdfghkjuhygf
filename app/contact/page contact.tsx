import Link from "next/link"

export const metadata = { title: "Contact | 3rd Street Boxing Gym" }

export default function Page(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <div className="prose max-w-none">
        <p>Got questions? Reach out via the form below or call the front desk.</p>
      </div>
    </div>
  )
}
