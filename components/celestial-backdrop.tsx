const STARS = [
  { top: '7%', left: '13%', size: 2, opacity: 0.78 },
  { top: '12%', left: '82%', size: 2, opacity: 0.62 },
  { top: '18%', left: '46%', size: 1, opacity: 0.55 },
  { top: '25%', left: '8%', size: 2, opacity: 0.58 },
  { top: '33%', left: '91%', size: 2, opacity: 0.68 },
  { top: '41%', left: '23%', size: 1, opacity: 0.52 },
  { top: '49%', left: '71%', size: 2, opacity: 0.62 },
  { top: '58%', left: '36%', size: 1, opacity: 0.46 },
  { top: '66%', left: '87%', size: 2, opacity: 0.58 },
  { top: '74%', left: '12%', size: 2, opacity: 0.52 },
  { top: '82%', left: '57%', size: 1, opacity: 0.48 },
  { top: '90%', left: '79%', size: 2, opacity: 0.56 },
  { top: '95%', left: '29%', size: 1, opacity: 0.42 },
]

export function CelestialBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Deep lacquer-black base with subtle plum depth */}
      <div className="absolute inset-0 bg-[#09080b]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#09080b_0%,#0c0910_36%,#09080b_72%,#080708_100%)]" />

      {/* Rich layered glows */}
      <div className="absolute inset-0 bg-[radial-gradient(78%_52%_at_72%_2%,rgba(167,126,67,0.28)_0%,rgba(106,76,38,0.12)_30%,transparent_66%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(72%_54%_at_16%_34%,rgba(93,55,104,0.18)_0%,rgba(48,28,56,0.08)_40%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(66%_50%_at_86%_76%,rgba(160,115,58,0.15)_0%,rgba(82,58,31,0.05)_42%,transparent_74%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(65%_48%_at_30%_92%,rgba(115,76,124,0.10)_0%,transparent_72%)]" />

      {/* Upper diffuse golden moonlight */}
      <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(245,220,170,0.28)_0%,rgba(211,173,102,0.15)_28%,rgba(154,111,59,0.065)_48%,transparent_72%)] blur-xl" />

      {/* Lower golden haze so the form does not fall into flat black */}
      <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(189,142,76,0.13)_0%,rgba(126,88,47,0.055)_35%,transparent_72%)] blur-2xl" />
      <div className="absolute bottom-[14%] -right-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(193,150,82,0.12)_0%,rgba(117,79,43,0.045)_36%,transparent_72%)] blur-2xl" />

      {/* Elegant celestial rings - stronger than v2 */}
      <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full border border-[#c7a86d]/45" />
      <div className="absolute -top-6 right-0 h-56 w-56 rounded-full border border-[#d6ba7f]/32" />
      <div className="absolute top-16 right-12 h-36 w-36 rounded-full border border-[#ead39b]/24" />

      {/* Left orbital field */}
      <div className="absolute -left-44 top-[17%] h-[25rem] w-[25rem] rounded-full border border-[#b6945d]/28" />
      <div className="absolute -left-28 top-[24%] h-64 w-64 rounded-full border border-[#d0b174]/22" />

      {/* Mid/lower orbital field */}
      <div className="absolute -right-48 top-[47%] h-[30rem] w-[30rem] rounded-full border border-[#c5a66e]/20" />
      <div className="absolute -left-56 bottom-[2%] h-[28rem] w-[28rem] rounded-full border border-[#a98553]/16" />

      {/* Fine gilded orbital lines */}
      <div className="absolute left-[-10%] top-[28%] h-px w-[66%] rotate-[-10deg] bg-gradient-to-r from-transparent via-[#d2b171]/40 to-transparent" />
      <div className="absolute right-[-14%] top-[54%] h-px w-[70%] rotate-[8deg] bg-gradient-to-r from-transparent via-[#d8ba7a]/30 to-transparent" />
      <div className="absolute left-[-8%] top-[69%] h-px w-[62%] rotate-[5deg] bg-gradient-to-r from-transparent via-[#b99760]/24 to-transparent" />
      <div className="absolute right-[-18%] top-[84%] h-px w-[72%] rotate-[-7deg] bg-gradient-to-r from-transparent via-[#c9aa6d]/22 to-transparent" />

      {/* Small constellation points */}
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
            boxShadow: '0 0 9px rgba(236, 204, 144, 0.42)',
          }}
        />
      ))}

      {/* Thin constellation connectors */}
      <div className="absolute left-[12%] top-[12%] h-px w-[18%] rotate-[18deg] bg-gradient-to-r from-transparent via-[#d6b679]/18 to-transparent" />
      <div className="absolute right-[14%] top-[34%] h-px w-[16%] rotate-[-26deg] bg-gradient-to-r from-transparent via-[#d6b679]/18 to-transparent" />
      <div className="absolute left-[21%] top-[57%] h-px w-[14%] rotate-[14deg] bg-gradient-to-r from-transparent via-[#d6b679]/14 to-transparent" />
      <div className="absolute right-[18%] top-[78%] h-px w-[17%] rotate-[22deg] bg-gradient-to-r from-transparent via-[#d6b679]/14 to-transparent" />

      {/* Readability vignette, kept softer than before */}
      <div className="absolute inset-0 shadow-[inset_0_0_110px_20px_rgba(0,0,0,0.30)]" />
    </div>
  )
}
