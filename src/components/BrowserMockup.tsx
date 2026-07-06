import { useState } from "react";
import styles from "./BrowserMockup.module.css";

interface BrowserMockupProps {
  src: string;
  alt: string;
  domain?: string;
  /** Rendered instead of the screenshot if it fails to load. */
  fallback?: React.ReactNode;
}

export function BrowserMockup({ src, alt, domain, fallback }: BrowserMockupProps) {
  const [failed, setFailed] = useState(false);

  if (failed && fallback) {
    return <>{fallback}</>;
  }

  return (
    <div className={styles.stage}>
      <div className={styles.window}>
        <div className={styles.chrome}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          {domain && <span className={styles.urlBar}>{domain}</span>}
        </div>
        <div className={styles.screen}>
          <img
            className={styles.page}
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        </div>
      </div>
    </div>
  );
}
