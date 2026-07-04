import { useState } from "react";
import { photos, videos } from "../data/content";
import type { AudiovisualItem } from "../data/content";
import styles from "./AudiovisualSection.module.css";

function GridItem({ item }: { item: AudiovisualItem }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={styles.item}>
      {failed ? (
        <div className={styles.placeholder} aria-hidden="true">
          ◎
        </div>
      ) : (
        <>
          <img
            className={`${styles.imageLayer} ${styles.imagePrimary}`}
            src={item.src}
            alt={item.alt}
            loading="lazy"
            onError={() => setFailed(true)}
          />
          {item.hoverSrc && (
            <img
              className={`${styles.imageLayer} ${styles.imageHover}`}
              src={item.hoverSrc}
              alt=""
              aria-hidden="true"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          )}
        </>
      )}
    </figure>
  );
}

export function AudiovisualSection() {
  const [tab, setTab] = useState<"photos" | "video">("photos");
  const items = tab === "photos" ? photos : videos;

  return (
    <section id="media" className="section">
      <div className="container">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Photo & Video</h2>

        <div className={styles.tabs} role="tablist" aria-label="Media type">
          <button
            type="button"
            role="tab"
            aria-selected={tab === "photos"}
            className={`${styles.tab} ${tab === "photos" ? styles.tabActive : ""}`}
            onClick={() => setTab("photos")}
          >
            Photos
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "video"}
            className={`${styles.tab} ${tab === "video" ? styles.tabActive : ""}`}
            onClick={() => setTab("video")}
          >
            Video
          </button>
        </div>

        <div className={styles.grid} role="tabpanel">
          {items.map((item) => (
            <GridItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
