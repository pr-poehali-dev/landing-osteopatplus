import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export const PREMIUM_STYLES = `
  .pm-header { padding: 20px 24px; }
  @media (min-width: 640px) { .pm-header { padding: 24px 48px; } }

  .pm-hero-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 100px 24px 64px;
  }
  @media (min-width: 768px) {
    .pm-hero-content {
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      padding: 96px 48px;
      align-items: flex-end;
    }
  }

  .pm-hero-btn { align-self: flex-start; }

  .pm-section-pad {
    padding: 80px 24px;
  }
  @media (min-width: 768px) { .pm-section-pad { padding: 128px 48px; } }

  .pm-about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 56px;
  }
  @media (min-width: 768px) {
    .pm-about-grid {
      grid-template-columns: 1fr 1fr;
      gap: 96px;
      align-items: center;
    }
  }

  .pm-divider { height: 1px; background: rgba(0,0,0,0.07); margin: 0 24px; }
  @media (min-width: 768px) { .pm-divider { margin: 0 48px; } }

  .pm-works-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }
  @media (min-width: 1024px) {
    .pm-works-grid { grid-template-columns: repeat(4, 1fr); }
  }

  .pm-steps-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  @media (min-width: 640px) {
    .pm-steps-grid { grid-template-columns: repeat(3, 1fr); gap: 48px; }
  }

  .pm-prices-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;
  }
  @media (min-width: 640px) {
    .pm-prices-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .pm-result-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  @media (min-width: 768px) {
    .pm-result-grid {
      grid-template-columns: 1fr 1fr;
      gap: 96px;
      align-items: start;
    }
  }

  .pm-result-pad { padding-top: 0; }
  @media (min-width: 768px) { .pm-result-pad { padding-top: 56px; } }

  .pm-footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  @media (min-width: 640px) {
    .pm-footer-grid {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 48px;
      align-items: start;
    }
  }

  .pm-footer-right { text-align: left; }
  @media (min-width: 640px) { .pm-footer-right { text-align: right; } }

  .pm-approach-tags {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  @media (min-width: 640px) {
    .pm-approach-tags {
      flex-direction: row;
      justify-content: center;
      gap: 56px;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  .pm-photo-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .pm-photo-img {
    width: 180px !important;
    height: 180px !important;
  }
  @media (min-width: 640px) {
    .pm-photo-img { width: 220px !important; height: 220px !important; }
  }
`;
