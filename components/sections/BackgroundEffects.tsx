"use client";

interface Particle {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
}

export function GridBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 170, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 170, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "grid-move 20s linear infinite",
        }}
      />
    </div>
  );
}

const particles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${(i * 7 + 5) % 100}%`,
  top: `${(i * 13 + 7) % 100}%`,
  delay: `${(i % 5) * 1.2}s`,
  duration: `${5 + (i % 4) * 1.5}s`,
  size: `${3 + (i % 3) * 2}px`,
  opacity: 0.12 + (i % 4) * 0.05,
}));

export function FloatingParticles() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: `rgba(0, 212, 170, ${p.opacity})`,
            animation: `float ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

export function CircuitPattern() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(0, 212, 170, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 212, 170, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(0, 212, 170, 0.02) 0%, transparent 40%)
        `,
      }}
    />
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <GridBackground />
      <FloatingParticles />
      <CircuitPattern />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(0, 212, 170, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 100% 100%, rgba(0, 212, 170, 0.04) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
