import type { GrowthCaseItem } from "../data/content";
import styles from "./GrowthCase.module.css";

interface GrowthCaseProps {
  item: GrowthCaseItem;
}

export function GrowthCase({ item }: GrowthCaseProps) {
  return (
    <article className={`${styles.case} ${item.featured ? styles.featured : ""}`}>
      <p className={styles.kicker}>
        Case {item.index} · {item.category}
      </p>
      <p className={styles.metric}>{item.metric}</p>
      <p className={styles.metricLabel}>{item.metricLabel}</p>
      <h3 className={styles.title}>{item.title}</h3>
      {item.aside && <p className={styles.aside}>{item.aside}</p>}
      <p className={styles.body}>{item.description}</p>
    </article>
  );
}
