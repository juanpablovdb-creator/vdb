import { hero } from "../data/content";
import styles from "./Hero.module.css";

const MUTED_PHRASES = ["sell with story", "code by vibe"];

export function Hero() {
  const taglineParts = splitTagline(hero.tagline);

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.heroInner}`}>
        <p className={styles.greeting}>{hero.name}</p>

        <h1 className={styles.tagline}>
          {taglineParts.map((part, i) => (
            <span key={i} className={part.muted ? styles.taglineMuted : undefined}>
              {part.text}
            </span>
          ))}
        </h1>

        <div className={styles.stats} role="list">
          {hero.stats.map((stat) => (
            <div key={stat.label} role="listitem">
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function splitTagline(tagline: string) {
  const parts: { text: string; muted: boolean }[] = [];
  let remaining = tagline;

  while (remaining.length > 0) {
    let matched = false;

    for (const phrase of MUTED_PHRASES) {
      if (remaining.toLowerCase().startsWith(phrase.toLowerCase())) {
        parts.push({ text: phrase, muted: true });
        remaining = remaining.slice(phrase.length);
        matched = true;
        break;
      }
    }

    if (matched) continue;

    const nextMuted = MUTED_PHRASES.map((p) => ({
      phrase: p,
      index: remaining.toLowerCase().indexOf(p.toLowerCase()),
    }))
      .filter((entry) => entry.index > 0)
      .sort((a, b) => a.index - b.index)[0];

    const cutAt = nextMuted?.index ?? remaining.length;
    parts.push({ text: remaining.slice(0, cutAt), muted: false });
    remaining = remaining.slice(cutAt);
  }

  return parts.filter((part) => part.text.length > 0);
}
