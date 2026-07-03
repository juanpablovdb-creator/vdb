import { useCallback, useRef } from "react";
import { hero } from "../data/content";
import styles from "./Hero.module.css";

const HIGHLIGHT_WORDS = new Set(["ship", "data", "sell", "story", "code", "vibe"]);

export function Hero() {
  const taglineRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLHeadingElement>) => {
    const el = taglineRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    el.style.setProperty("--cursor-x", `${x}%`);
  }, []);

  const words = hero.tagline.split(/(\s+)/);

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.heroInner}`}>
        <p className={styles.greeting}>{hero.name}</p>

        <h1
          ref={taglineRef}
          className={styles.tagline}
          onMouseMove={handleMouseMove}
        >
          {words.map((part, i) => {
            if (/^\s+$/.test(part)) return part;
            const clean = part.replace(/[.,—]/g, "").toLowerCase();
            const highlight = HIGHLIGHT_WORDS.has(clean);
            return (
              <span
                key={i}
                className={highlight ? styles.taglineWord : undefined}
                style={
                  highlight
                    ? ({
                        color: `color-mix(in srgb, var(--accent) calc(var(--cursor-x, 50%) * 0.6 + 20%), var(--text))`,
                      } as React.CSSProperties)
                    : undefined
                }
              >
                {part}
              </span>
            );
          })}
        </h1>

        <div className={styles.stats} role="list">
          {hero.stats.map((stat) => (
            <div key={stat.label} className={styles.stat} role="listitem">
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
