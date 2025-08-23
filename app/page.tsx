import Image from "next/image"
import Link from "next/link"

export default function Home(){
  return (
    <div>
      {/* Hero */}
      <section aria-label="Hero" className="relative h-[70vh] min-h-[520px]">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline aria-label="Boxers training in 3rd Street Boxing Gym with heavy bags and speed bags, Bay Bridge visible through large industrial windows.">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">WHERE SF’S TOUGHEST FIND THEIR STRENGTH</h1>
          <p className="mt-4 text-lg md:text-2xl">Authentic Boxing. Real Community. No Frills.</p>
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <Link className="btn btn-red" href="/classes#book">CLAIM YOUR 50% OFF FIRST ROUND</Link>
            <Link className="btn btn-ghost border-white" href="/schedule">SEE OUR SCHEDULE</Link>
            <Link className="inline-flex items-center gap-2 underline" href="/personal-training">MEET OUR COACHES →</Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section aria-labelledby="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 id="programs" className="text-3xl font-bold mb-8">SF-TOUGH PROGRAMS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {href:"/classes", title:"CLASSES", copy:"From FiDi desk warriors to Mission artists – find your level. Beginner to pro sessions daily.", icon:"classes"},
            {href:"/academy", title:"ACADEMY", copy:"Compete in SF’s amateur circuit? Our Castro-to-Chinatown champs start here.", icon:"academy"},
            {href:"/bootcamp", title:"BOOTCAMP", copy:"Conquer hills steeper than California Street.", icon:"bootcamp"},
            {href:"/personal-training", title:"PERSONAL TRAINING", copy:"1-on-1 sessions sharper than a cable car bell.", icon:"pt"},
            {href:"/youth", title:"YOUTH", copy:"Build confidence stronger than Sutro Tower.", icon:"youth"},
            {href:"/facilities", title:"FACILITIES", copy:"Open gym access with ring, bags, and strength zone.", icon:"facilities"}
          ].map(card=>(
            <Link key={card.title} href={card.href} className="rounded-2xl border p-6 hover:shadow-soft">
              <div aria-hidden className="text-ggRed text-3xl mb-3">🥊</div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-fogGray">{card.copy}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-ggRed font-semibold">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Ed Tribute */}
      <section aria-labelledby="ed" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="ed" className="text-3xl font-bold mb-2">IRON MAN STRONG: ED’S COMEBACK JOURNEY</h2>
          <p className="text-fogGray mb-6">From 2017 to 2025: resilience, community, and the long road back.</p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image src="https://images.unsplash.com/photo-1517964603305-11c1f0be9d82?q=80&w=1200&auto=format&fit=crop" width={1200} height={800} alt="Ed Gutierrez, a Hispanic man in his 60s, mitts up with a young boxer in the ring, both smiling" className="rounded-2xl shadow-soft"/>
            <ol className="space-y-3">
              {["2017: Stroke","2019: First steps","2021: Back in the gym","2023: Coaching again","2025: Leading classes"].map((t,i)=>(
                <li key={i} className="p-4 rounded-2xl bg-white border">{t}</li>
              ))}
            </ol>
          </div>
          <div className="mt-6">
            <Link className="btn btn-red" href="https://gofundme.com" target="_blank" rel="noopener">SUPPORT ED’S NEXT ROUND</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 id="testimonials" className="text-3xl font-bold mb-8">HEAR IT FROM THE NEIGHBORHOOD</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <figure className="rounded-2xl border p-6">
            <blockquote className="text-xl">“Shredded my pandemic ‘Dolores Park bod’ in 8 weeks! More energizing than Philz coffee.”</blockquote>
            <figcaption className="mt-4 text-fogGray">Sarah K. | SoMa</figcaption>
          </figure>
          <figure className="rounded-2xl border p-6">
            <blockquote className="text-xl">“Went from shy to school champ. Coaches here are like family.”</blockquote>
            <figcaption className="mt-4 text-fogGray">Diego R. | Sunset</figcaption>
          </figure>
        </div>
      </section>
    </div>
  )
}
