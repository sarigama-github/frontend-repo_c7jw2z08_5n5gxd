import ScrollShowcase from './components/ScrollShowcase'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero */}
      <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.16),transparent_40%)]" />
        <div className="relative z-10 text-center px-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300 mb-6">A E Telco</div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            From phone to eSIM —
            <br />
            experience the switch on scroll
          </h1>
          <p className="mt-5 text-slate-300 max-w-xl mx-auto">
            A playful, immersive moment that reveals how simple it is to move to ae telco eSIM.
          </p>
          <div className="mt-10 text-slate-400 text-sm">Scroll to begin</div>
        </div>
      </section>

      <ScrollShowcase />

      {/* Details section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(14,165,233,0.1),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.1),transparent_30%)]" />
        <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[{
            title: 'Instant setup',
            desc: 'Activate in minutes with a simple QR or app-based install.'
          }, {
            title: 'Keep your number',
            desc: 'Port seamlessly and keep all your conversations intact.'
          }, {
            title: 'Eco friendly',
            desc: 'No plastic, no shipping — just signal.'
          }].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-slate-200 font-semibold">{f.title}</div>
              <div className="mt-2 text-slate-400 text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto text-center px-6">
          <div className="bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-300/20 rounded-2xl p-10">
            <h2 className="text-3xl font-bold">Ready to try ae telco eSIM?</h2>
            <p className="mt-2 text-slate-300">Experience modern connectivity with an instant digital setup.</p>
            <div className="mt-6 inline-flex items-center gap-3">
              <a href="#" className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-600 transition-colors font-semibold">Get started</a>
              <a href="#" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">Learn more</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
