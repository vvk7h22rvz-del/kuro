const STARS = [
  { top: '8%', left: '14%', size: 2, opacity: 0.65 },
  { top: '14%', left: '78%', size: 1, opacity: 0.5 },
  { top: '22%', left: '46%', size: 2, opacity: 0.55 },
  { top: '31%', left: '9%', size: 1, opacity: 0.45 },
  { top: '38%', left: '90%', size: 2, opacity: 0.55 },
  { top: '49%', left: '22%', size: 1, opacity: 0.45 },
  { top: '58%', left: '74%', size: 2, opacity: 0.5 },
  { top: '68%', left: '38%', size: 1, opacity: 0.4 },
  { top: '77%', left: '86%', size: 2, opacity: 0.5 },
  { top: '86%', left: '13%', size: 1, opacity: 0.45 },
  { top: '92%', left: '58%', size: 2, opacity: 0.4 },
]

export function CelestialBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Deep black base */}
      <div className="absolute inset-0 bg-[#09080b]" />

      {/* Rich layered glow */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_55%_at_72%_0%,rgba(155,116,62,0.20)_0%,rgba(97,67,35,0.08)_32%,transparent_68%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_15%_35%,rgba(76,46,86,0.13)_0%,rgba(45,27,52,0.05)_40%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_80%_78%,rgba(141,101,51,0.09)_0%,transparent_72%)]" />

      {/* Soft golden haze instead of a solid moon */}
      <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(239,211,158,0.20)_0%,rgba(204,164,92,0.10)_28%,rgba(145,105,55,0.045)_48%,transparent_72%)] blur-xl" />

      {/* Elegant celestial rings */}
      <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full border border-[#c7a86d]/30" />
      <div className="absolute -top-6 right-0 h-56 w-56 rounded-full border border-[#d6ba7f]/20" />
      <div className="absolute top-16 right-12 h-36 w-36 rounded-full border border-[#ead39b]/14" />

      {/* Left-side orbital curves for depth */}
      <div className="absolute -left-40 top-[18%] h-80 w-80 rounded-full border border-[#b6945d]/16" />
      <div className="absolute -left-28 top-[23%] h-60 w-60 rounded-full border border-[#d0b174]/12" />

      {/* Fine gilded lines */}
      <div className="absolute left-[-10%] top-[28%] h-px w-[62%] rotate-[-10deg] bg-gradient-to-r from-transparent via-[#c6a465]/25 to-transparent" />
      <div className="absolute right-[-14%] top-[63%] h-px w-[66%] rotate-[8deg] bg-gradient-to-r from-transparent via-[#d2b274]/18 to-transparent" />

      {/* Tiny stars */}
      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#ead7aa]"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            boxShadow: '0 0 8px rgba(232, 202, 144, 0.35)',
          }}
        />
      ))}

      {/* Slight vignette so the center stays readable */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_28px_rgba(0,0,0,0.42)]" />
    </div>
  )
}
