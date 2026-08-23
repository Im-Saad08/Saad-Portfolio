import { useReducedMotion } from "../hooks/useIntersectionObserver";

export function GridBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {!reducedMotion && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      )}
    </div>
  );
}

export function FloatingParticles() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 6}s`,
    duration: `${4 + Math.random() * 4}s`,
    size: `${2 + Math.random() * 4}px`,
  }));

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
            background: `rgba(56, 189, 248, ${0.1 + Math.random() * 0.15})`,
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
          radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(56, 189, 248, 0.03) 0%, transparent 40%)
        `,
      }}
    />
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <GridBackground />
      <FloatingParticles />
      <CircuitPattern />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.1) 0%, transparent 60%),
            radial-gradient(ellipse at 100% 100%, rgba(56, 189, 248, 0.06) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}