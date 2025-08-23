"use client"
import { useEffect, useState } from "react"
import clsx from "classnames"

type Session = {
  id: number
  startsAt: string
  durationMin: number
  location: string
  capacity: number
  booked: number
}

const TABS = [
  {key:"beginner", name:"Beginner (Fog Cutter)"},
  {key:"intermediate", name:"Intermediate (Bay Bridger)"},
  {key:"advanced", name:"Advanced (Twin Peaks Climber)"},
  {key:"youth", name:"Youth (Future Champs)"},
  {key:"sparring", name:"Sparring (Fog City Fights)"},
]

export default function ClassesPage(){
  const [tab,setTab]=useState("beginner")
  const [sessions,setSessions]=useState<Session[]>([])
  useEffect(()=>{
    fetch("/api/schedule?class=beginner").then(r=>r.json()).then(setSessions)
  },[])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">CLASSES</h1>

      <div role="tablist" aria-label="Class levels" className="flex flex-wrap gap-2 mb-8">
        {TABS.map(t=>(
          <button key={t.key} role="tab" aria-selected={tab===t.key} aria-controls={`${t.key}-panel`} onClick={()=>setTab(t.key)} className={clsx("px-4 h-12 rounded-2xl border", tab===t.key && "bg-ggRed text-white border-ggRed")}>{t.name}</button>
        ))}
      </div>

      <section id="beginner-panel" role="tabpanel" aria-labelledby="beginner" hidden={tab!=="beginner"}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold">Beginner: Fog Cutter</h2>
            <p className="mt-2 text-fogGray">Group of beginner boxers, mixed ages and ethnicities, practicing jabs in front of large windows with San Francisco cityscape visible.</p>
            <ul className="mt-4 list-disc pl-6 text-fogGray">
              <li>Learn stance, jab-cross, and defense — smoother than a cable car descent down Powell St.</li>
              <li>Friendly, ego-free atmosphere. Gloves provided.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Upcoming sessions</h3>
            <div className="overflow-x-auto mt-3 border rounded-2xl">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr><th className="text-left p-3">When</th><th className="text-left p-3">Location</th><th className="text-left p-3">Spots</th><th className="text-left p-3">Action</th></tr>
                </thead>
                <tbody>
                  {sessions.map(s=>{
                    const d = new Date(s.startsAt)
                    const spots = Math.max(0, s.capacity - s.booked)
                    return (
                      <tr key={s.id} className="border-t">
                        <td className="p-3">{d.toLocaleString([], {weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"2-digit"})} · {s.durationMin}m</td>
                        <td className="p-3">{s.location}</td>
                        <td className="p-3">{spots}</td>
                        <td className="p-3"><a className="btn btn-red h-10" href={`/book/${s.id}`}>Book</a></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="book" className="mt-10 p-6 rounded-2xl border">
          <h3 className="text-xl font-semibold mb-3">BOOK YOUR FIRST CLASS (50% OFF)</h3>
          <form action="/api/booking" method="post" className="grid md:grid-cols-3 gap-3">
            <input type="hidden" name="sessionId" value={sessions[0]?.id || ""} />
            <label className="sr-only" htmlFor="name">Name</label>
            <input id="name" name="name" required aria-required className="h-12 rounded-2xl px-3 border" placeholder="Your name"/>
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required aria-required className="h-12 rounded-2xl px-3 border" placeholder="Email"/>
            <button className="btn btn-red h-12" type="submit">Reserve</button>
          </form>
        </div>
      </section>

      {TABS.filter(t=>t.key!=="beginner").map(t=>(
        <section key={t.key} id={`${t.key}-panel`} role="tabpanel" aria-labelledby={t.key} hidden={tab!==t.key} className="text-fogGray">
          <p className="italic">Details coming online — stop by the front desk to ask about {t.name}.</p>
        </section>
      ))}
    </div>
  )
}
