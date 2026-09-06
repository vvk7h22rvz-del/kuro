const STARS = [
  { top: '8%', left: '14%', size: 2, delay: '0s' },
  { top: '12%', left: '82%', size: 3, delay: '1.2s' },
  { top: '22%', left: '46%', size: 2, delay: '2.1s' },
  { top: '30%', left: '8%', size: 2, delay: '0.6s' },
  { top: '34%', left: '90%', size: 2, delay: '1.8s' },
  { top: '48%', left: '20%', size: 3, delay: '2.6s' },
  { top: '56%', left: '74%', size: 2, delay: '0.9s' },
  { top: '66%', left: '38%', size: 2, delay: '1.5s' },
  { top: '74%', left: '86%', size: 2, delay: '2.9s' },
  { top: '82%', left: '12%', size: 3, delay: '0.3s' },
  { top: '90%', left: '58%', size: 2, delay: '2.2s' },
]

const PETALS = [
  { left: '10%', delay: '0s', duration: '14s' },
  { left: '30%', delay: '5s', duration: '17s' },
  { left: '52%', delay: '9s', duration: '13s' },
  { left: '72%', delay: '3s', duration: '18s' },
  { left: '88%', delay: '7s', duration: '15s' },
]

export function CelestialBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* deep vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,oklch(0.3_0.09_305)_0%,oklch(0.16_0.03_305)_55%,oklch(0.1_0.02_305)_100%)]" />

      {/* moon glow */}
      <div className="absolute -top-16 right-6 h-44 w-44 rounded-full bg-[radial-gradient(circle,oklch(0.9_0.08_90/0.85)_0%,oklch(0.82_0.12_84/0.35)_40%,transparent_70%)] blur-[2px]" />
      <div className="absolute top-2 right-14 h-24 w-24 rounded-full bg-gold-gradient opacity-90 shadow-[0_0_60px_20px_oklch(0.82_0.12_84/0.25)]" />

      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute animate-pulse rounded-full bg-gold"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: '3.5s',
            boxShadow: '0 0 6px 1px oklch(0.82 0.12 84 / 0.6)',
          }}
        />
      ))}

      {PETALS.map((p, i) => (
        <span
          key={i}
          className="sakura absolute -top-6"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      <style>{`
        .sakura {
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, oklch(0.8 0.09 350 / 0.55), oklch(0.62 0.12 330 / 0.35));
          border-radius: 12px 1px 12px 1px;
          opacity: 0;
          animation-name: sakura-fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        @keyframes sakura-fall {
          0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.5; }
          100% { transform: translateY(110vh) translateX(40px) rotate(360deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sakura { display: none; }
        }
      `}</style>
    </div>
  )
}
