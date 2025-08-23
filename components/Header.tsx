"use client"
import Link from "next/link"
import { useState } from "react"
import Logo from "./Logo"

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header role="banner" className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav aria-label="Primary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" aria-label="3rd Street Boxing Gym - Home" className="flex items-center gap-3 text-fogGray">
            <Logo className="w-36 text-ggRed" />
            <span className="sr-only">3rd Street Boxing Gym | Dogpatch's Fight Factory Since 2005</span>
          </Link>

          <button aria-label="Open menu" aria-expanded={open} onClick={()=>setOpen(!open)} className="lg:hidden p-3 rounded-2xl border border-fogGray">
            <span className="sr-only">Toggle menu</span>☰
          </button>

          <ul role="menubar" className="hidden lg:flex items-center gap-6 text-sm" aria-label="Main menu">
            <li role="none"><Link role="menuitem" className="hover:underline" href="/classes">Classes</Link></li>
            <li role="none"><Link role="menuitem" className="hover:underline" href="/academy">Academy</Link></li>
            <li role="none"><Link role="menuitem" className="hover:underline" href="/bootcamp">Bootcamp</Link></li>
            <li role="none"><Link role="menuitem" className="hover:underline" href="/personal-training">Personal Training</Link></li>
            <li role="none"><Link role="menuitem" className="hover:underline" href="/youth">Youth</Link></li>
            <li role="none"><Link role="menuitem" className="hover:underline" href="/facilities">Facilities</Link></li>
            <li role="none"><Link role="menuitem" className="hover:underline" href="/schedule">Schedule</Link></li>
            <li role="none"><Link role="menuitem" className="hover:underline" href="/contact">Contact</Link></li>
            <li role="none"><Link role="menuitem" className="btn btn-gray" href="/join">Join</Link></li>
            <li role="none"><Link role="menuitem" className="btn btn-red" href="/classes#book">FREE Intro Class</Link></li>
            <li role="none"><Link role="menuitem" className="btn btn-gray" href="/facilities#open-gym">Book Open Gym</Link></li>
          </ul>
        </div>
        {open && (
          <div className="lg:hidden pb-4">
            <ul className="grid gap-3 text-base">
              {["classes","academy","bootcamp","personal-training","youth","facilities","schedule","contact"].map(p=>(
                <li key={p}><Link onClick={()=>setOpen(false)} href={`/${p}`} className="block py-2">{p.replace('-',' ').replace(/\w/g, s=>s.toUpperCase())}</Link></li>
              ))}
              <li><Link onClick={()=>setOpen(false)} className="btn btn-red" href="/classes#book">FREE Intro Class</Link></li>
              <li><Link onClick={()=>setOpen(false)} className="btn btn-gray" href="/facilities#open-gym">Book Open Gym</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
