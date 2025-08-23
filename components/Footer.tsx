import Link from "next/link"

export default function Footer(){
  return (
    <footer role="contentinfo" className="mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <section aria-label="Contact information">
          <h3 className="text-xl font-semibold mb-3">Our Corner of the City</h3>
          <address className="not-italic leading-7">
            2576 3rd Street, San Francisco, CA 94107<br/>
            Between 22nd & 23rd in Dogpatch<br/>
            <a href="tel:+14155508260">(415) 550-8260</a><br/>
            <a href="mailto:info@3rdstreetboxing.com">info@3rdstreetboxing.com</a>
          </address>
          <div className="mt-4">
            <strong>Hours:</strong><br/>
            Mon–Fri: 5AM–10PM<br/>
            Sat–Sun: 7AM–8PM
          </div>
        </section>

        <section aria-label="Quick links">
          <h3 className="text-xl font-semibold mb-3">Navigate</h3>
          <ul className="space-y-2">
            {["Classes","Academy","Bootcamp","Personal Training","Youth","Facilities","Schedule","Join","Contact"].map(n=>{
              const href = "/" + n.toLowerCase().replace(" ","-").replace(" ","-")
              return <li key={n}><Link href={href}>{n}</Link></li>
            })}
          </ul>
        </section>

        <section aria-label="Local SEO keywords">
          <h3 className="text-xl font-semibold mb-3">SF's Boxing Hub</h3>
          <div className="flex flex-wrap gap-2">
            {["Best Boxing Gym San Francisco","Dogpatch Fitness","Bay Area Boxing Classes","SF Youth Boxing","Personal Training Mission Bay"].map(k=>(
              <span key={k} className="px-2 py-1 rounded bg-white/10">{k}</span>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/accessibility">Accessibility Statement</Link>
          </div>
        </section>

        <section aria-label="Credits and badges">
          <div className="space-y-3">
            <div className="flex gap-3 items-center">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded">BBB</span>
              <span>Better Business Bureau Accredited</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded">Yelp</span>
              <span>5-Star Community Rated</span>
            </div>
          </div>
          <p className="mt-8 text-sm opacity-80">Made by Ammar Alkheder</p>
          <form className="mt-6" action="/api/newsletter" method="post">
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <div className="flex gap-2">
              <input id="newsletter" name="email" required aria-required className="w-full px-3 h-12 rounded-2xl text-black" type="email" placeholder="Your email"/>
              <button className="btn btn-red h-12" type="submit">Subscribe</button>
            </div>
            <p className="mt-2 text-xs opacity-80">We respect your privacy. <Link href="/privacy">Privacy Policy</Link></p>
          </form>
        </section>
      </div>
    </footer>
  )
}
