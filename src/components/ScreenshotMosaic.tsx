import styles from "./ScreenshotMosaic.module.css";

interface ScreenshotMosaicProps {
  images: string[];
  alt: string;
}

export function ScreenshotMosaic({ images, alt }: ScreenshotMosaicProps) {
  const [featured, ...rest] = images;

  return (
    <div className={styles.stage}>
      <div className={styles.mosaic}>
        <div className={`${styles.tile} ${styles.featured}`}>
          <img src={featured} alt={alt} loading="lazy" />
        </div>
        <div className={styles.row}>
          {rest.map((img, i) => (
            <div key={img} className={styles.tile} style={{ transitionDelay: `${i * 50}ms` }}>
              <img src={img} alt={`${alt} (view ${i + 2})`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
