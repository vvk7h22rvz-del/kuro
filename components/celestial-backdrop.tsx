const STARS = [
  { top: '10%', left: '16%', size: 1 },
  { top: '18%', left: '76%', size: 1 },
  { top: '29%', left: '38%', size: 1 },
  { top: '43%', left: '88%', size: 1 },
  { top: '58%', left: '18%', size: 1 },
  { top: '72%', left: '68%', size: 1 },
  { top: '86%', left: '32%', size: 1 },
]

export function CelestialBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* lacquer-black base */}
      <div className="absolute inset-0 bg-[#070707]" />

      {/* soft ink depth */}
      <div className="absolute inset-0 bg-[radial-gradient(95%_62%_at_50%_0%,rgba(76,63,48,0.10)_0%,rgba(18,16,15,0.03)_42%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(75%_50%_at_100%_28%,rgba(112,88,48,0.055)_0%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.012),transparent_18%,transparent_82%,rgba(0,0,0,0.38))]" />

      {/* restrained celestial arcs — no solid moon */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full border border-[#b99a63]/12" />
      <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full border border-[#d0b47b]/8" />
      <div className="absolute top-10 right-8 h-28 w-28 rounded-full border border-[#e1c98f]/6" />

      {/* diffuse moonlight */}
      <div className="absolute -top-20 right-[-2rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,183,122,0.10)_0%,rgba(150,118,67,0.045)_34%,transparent_68%)] blur-2xl" />

      {/* fine gilded lines */}
      <div className="absolute left-[-18%] top-[34%] h-px w-[58%] rotate-[-12deg] bg-gradient-to-r from-transparent via-[#b89a68]/10 to-transparent" />
      <div className="absolute right-[-22%] top-[68%] h-px w-[64%] rotate-[9deg] bg-gradient-to-r from-transparent via-[#c5a96f]/8 to-transparent" />

      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#d8c08b]"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: 0.34,
            boxShadow: '0 0 8px rgba(205, 174, 112, 0.18)',
          }}
        />
      ))}

      {/* subtle edge vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_140px_38px_rgba(0,0,0,0.62)]" />
    </div>
  )
}
