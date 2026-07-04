import { useState } from "react";
import type { CardItem, CardSize } from "../data/content";
import { MasterclassInquiryModal } from "./MasterclassInquiryModal";
import styles from "./Card.module.css";

interface CardProps {
  item: CardItem;
  size?: CardSize;
}

function CardMedia({ item }: { item: CardItem }) {
  const [failed, setFailed] = useState(false);
  const initial = item.title.charAt(0).toUpperCase();

  if (!item.image || failed) {
    return <div className={styles.placeholder}>{initial}</div>;
  }

  return (
    <>
      <img
        className={`${styles.imageLayer} ${styles.imagePrimary}`}
        src={item.image}
        alt={item.imageAlt ?? item.title}
        loading="lazy"
        onError={() => setFailed(true)}
      />
      {item.image && (
        <img
          className={`${styles.imageLayer} ${styles.imageHover}`}
          src={item.image.replace(".webp", "-hover.webp")}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      )}
    </>
  );
}

export function Card({ item, size = "default" }: CardProps) {
  const sizeClass =
    size === "large"
      ? styles["card--large"]
      : size === "compact"
        ? styles["card--compact"]
        : size === "work"
          ? styles["card--work"]
          : "";

  const showMedia = size !== "work";

  return (
    <article className={`${styles.card} ${sizeClass}`}>
      {item.link && (
        <a
          className={styles.cardLink}
          href={item.link}
          target={item.link.startsWith("http") ? "_blank" : undefined}
          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={`${item.title}${item.link.startsWith("http") ? " (opens in new tab)" : ""}`}
        />
      )}

      {showMedia && (
        <div className={styles.cardMedia}>
          <CardMedia item={item} />
        </div>
      )}

      <div className={styles.cardBody}>
        {item.tag && <span className={styles.cardTag}>{item.tag}</span>}
        <h3 className={styles.cardTitle}>{item.title}</h3>
        {item.role && <p className={styles.cardRole}>{item.role}</p>}
        <p className={styles.cardDescription}>{item.description}</p>
        {item.link && item.link !== "#" && size !== "work" && (
          <span className={styles.cardExternal} aria-hidden="true">
            View →
          </span>
        )}
      </div>
    </article>
  );
}

interface WorkCardProps {
  title: string;
  company: string;
  period?: string;
  description: string;
}

export function WorkCard({ title, company, period, description }: WorkCardProps) {
  return (
    <article className={`${styles.card} ${styles["card--work"]}`}>
      <div className={styles.cardBody}>
        <span className={styles.cardMeta}>
          {company}
          {period && ` · ${period}`}
        </span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </article>
  );
}

interface SpeakingCardProps {
  title: string;
  venue: string;
  audience: string;
  topic: string;
  inquiryForm?: boolean;
}

export function SpeakingCard({
  title,
  venue,
  audience,
  topic,
  inquiryForm,
}: SpeakingCardProps) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <article className={`${styles.card} ${styles["card--work"]}`}>
        <div className={styles.cardBody}>
          <span className={styles.cardTag}>{venue}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardMeta}>{audience}</p>
          <p className={styles.cardDescription}>{topic}</p>
          {inquiryForm && (
            <button
              type="button"
              className={styles.inquireBtn}
              onClick={() => setFormOpen(true)}
            >
              Request a session
            </button>
          )}
        </div>
      </article>

      {inquiryForm && (
        <MasterclassInquiryModal
          open={formOpen}
          onClose={() => setFormOpen(false)}
          sessionTitle={title}
        />
      )}
    </>
  );
}
