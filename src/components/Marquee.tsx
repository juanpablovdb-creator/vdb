import { consultancy } from "../data/content";
import { GigCard } from "./GigCard";
import styles from "./Marquee.module.css";

/** Infinite logo marquee for Consultancy & Side Gigs (Stokt-style logo strip). */
export function GigMarquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {[0, 1].map((half) => (
          <div
            key={half}
            className={styles.half}
            aria-hidden={half === 1 || undefined}
          >
            {consultancy.map((item) => (
              <div key={`${half}-${item.id}`} className={styles.item}>
                <GigCard item={item} interactive={half === 0} />
                <span className={styles.star} aria-hidden="true">
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
