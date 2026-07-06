import { useState } from "react";
import type { GigItem } from "../data/content";
import styles from "./GigCard.module.css";

interface GigCardProps {
  item: GigItem;
  /** Duplicate marquee halves render non-interactive copies. */
  interactive?: boolean;
}

export function GigCard({ item, interactive = true }: GigCardProps) {
  const [logoFailed, setLogoFailed] = useState(false);

  const inner = (
    <>
      {logoFailed ? (
        <span className={styles.logoFallback} aria-hidden="true">
          {item.title.charAt(0)}
        </span>
      ) : (
        <img
          className={styles.logo}
          src={item.logo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={() => setLogoFailed(true)}
        />
      )}
      <span className={styles.name}>{item.title}</span>
      {item.link && (
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      )}
    </>
  );

  if (item.link && interactive) {
    return (
      <a
        className={styles.gig}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.title} (opens in new tab)`}
      >
        {inner}
      </a>
    );
  }

  return <div className={styles.gig}>{inner}</div>;
}
