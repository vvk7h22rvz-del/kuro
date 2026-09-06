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

const GOLD_FLAKES = [
  { left: '9%', top: '11%', size: 7, rotate: 18, opacity: 0.45 },
  { left: '24%', top: '19%', size: 5, rotate: 62, opacity: 0.34 },
  { left: '68%', top: '9%', size: 8, rotate: -16, opacity: 0.42 },
  { left: '87%', top: '24%', size: 5, rotate: 36, opacity: 0.32 },
  { left: '15%', top: '48%', size: 6, rotate: -28, opacity: 0.28 },
  { left: '79%', top: '57%', size: 7, rotate: 20, opacity: 0.30 },
  { left: '34%', top: '73%', size: 5, rotate: 70, opacity: 0.24 },
  { left: '91%', top: '84%', size: 6, rotate: -8, opacity: 0.26 },
]

const PETALS = [
  { left: '14%', delay: '0s', duration: '16s', size: 10, drift: 26 },
  { left: '39%', delay: '6s', duration: '19s', size: 8, drift: -18 },
  { left: '67%', delay: '11s', duration: '17s', size: 9, drift: 22 },
  { left: '86%', delay: '3s', duration: '21s', size: 7, drift: -14 },
]

export function CelestialBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Deep lacquer-black base */}
      <div className="absolute inset-0 bg-[#09080b]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#09080b_0%,#0c0910_36%,#09080b_72%,#080708_100%)]" />

      {/* Rich layered glows */}
      <div className="absolute inset-0 bg-[radial-gradient(78%_52%_at_72%_2%,rgba(167,126,67,0.28)_0%,rgba(106,76,38,0.12)_30%,transparent_66%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(72%_54%_at_16%_34%,rgba(93,55,104,0.18)_0%,rgba(48,28,56,0.08)_40%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(66%_50%_at_86%_76%,rgba(160,115,58,0.15)_0%,rgba(82,58,31,0.05)_42%,transparent_74%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(65%_48%_at_30%_92%,rgba(115,76,124,0.10)_0%,transparent_72%)]" />

      {/* Diffuse golden light */}
      <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(245,220,170,0.28)_0%,rgba(211,173,102,0.15)_28%,rgba(154,111,59,0.065)_48%,transparent_72%)] blur-xl" />
      <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(189,142,76,0.13)_0%,rgba(126,88,47,0.055)_35%,transparent_72%)] blur-2xl" />
      <div className="absolute bottom-[14%] -right-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(193,150,82,0.12)_0%,rgba(117,79,43,0.045)_36%,transparent_72%)] blur-2xl" />

      {/* Celestial rings */}
      <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full border border-[#c7a86d]/45" />
      <div className="absolute -top-6 right-0 h-56 w-56 rounded-full border border-[#d6ba7f]/32" />
      <div className="absolute top-16 right-12 h-36 w-36 rounded-full border border-[#ead39b]/24" />
      <div className="absolute -left-44 top-[17%] h-[25rem] w-[25rem] rounded-full border border-[#b6945d]/28" />
      <div className="absolute -left-28 top-[24%] h-64 w-64 rounded-full border border-[#d0b174]/22" />
      <div className="absolute -right-48 top-[47%] h-[30rem] w-[30rem] rounded-full border border-[#c5a66e]/20" />
      <div className="absolute -left-56 bottom-[2%] h-[28rem] w-[28rem] rounded-full border border-[#a98553]/16" />

      {/* Fine gilded orbital lines */}
      <div className="absolute left-[-10%] top-[28%] h-px w-[66%] rotate-[-10deg] bg-gradient-to-r from-transparent via-[#d2b171]/40 to-transparent" />
      <div className="absolute right-[-14%] top-[54%] h-px w-[70%] rotate-[8deg] bg-gradient-to-r from-transparent via-[#d8ba7a]/30 to-transparent" />
      <div className="absolute left-[-8%] top-[69%] h-px w-[62%] rotate-[5deg] bg-gradient-to-r from-transparent via-[#b99760]/24 to-transparent" />
      <div className="absolute right-[-18%] top-[84%] h-px w-[72%] rotate-[-7deg] bg-gradient-to-r from-transparent via-[#c9aa6d]/22 to-transparent" />

      {/* Gold-leaf flecks */}
      {GOLD_FLAKES.map((f, i) => (
        <span
          key={`flake-${i}`}
          className="absolute bg-[linear-gradient(135deg,#f4dfaa_0%,#c49b52_48%,#8f6a35_100%)] shadow-[0_0_10px_rgba(210,170,95,0.16)]"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: Math.max(3, f.size * 0.55),
            opacity: f.opacity,
            transform: `rotate(${f.rotate}deg) skewX(-12deg)`,
            borderRadius: '1px',
          }}
        />
      ))}

      {/* Tiny stars */}
      {STARS.map((s, i) => (
        <span
          key={`star-${i}`}
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

      {/* Sparse drifting petals */}
      {PETALS.map((p, i) => (
        <span
          key={`petal-${i}`}
          className="petal absolute -top-8"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 0.72,
            animationDelay: p.delay,
            animationDuration: p.duration,
            ['--petal-drift' as string]: `${p.drift}px`,
          }}
        />
      ))}

      {/* Readability vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_110px_20px_rgba(0,0,0,0.30)]" />

      <style>{`
        .petal {
          background:
            radial-gradient(circle at 30% 30%, rgba(245, 212, 220, .78), rgba(181, 103, 125, .42) 72%);
          border-radius: 70% 30% 65% 35%;
          opacity: 0;
          filter: blur(.15px);
          animation-name: petal-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform-origin: center;
        }

        @keyframes petal-fall {
          0% {
            transform: translate3d(0, -8vh, 0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: .55; }
          45% {
            transform: translate3d(var(--petal-drift), 48vh, 0) rotate(170deg);
            opacity: .42;
          }
          88% { opacity: .28; }
          100% {
            transform: translate3d(calc(var(--petal-drift) * -0.35), 112vh, 0) rotate(360deg);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .petal { display: none; }
        }
      `}</style>
    </div>
  )
}
