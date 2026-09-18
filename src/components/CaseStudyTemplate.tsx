import type {
  CaseStudy,
  CaseStudyBlock,
  CaseStudyFigure,
} from "../data/caseStudies";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./CaseStudyTemplate.module.css";

interface CaseStudyTemplateProps {
  study: CaseStudy;
}

export function CaseStudyTemplate({ study }: CaseStudyTemplateProps) {
  const homeHref = study.homeHref ?? "/";
  const homeLabel = study.homeLabel ?? "Back to home";

  return (
    <article className={styles.page}>
      <header className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <a href={homeHref} className={styles.logo}>
            VDB
          </a>
          <ThemeToggle />
        </div>
      </header>

      <div className={`container ${styles.body}`}>
        <a href={homeHref} className={styles.back}>
          ← {homeLabel}
        </a>

        <header className={styles.header}>
          <p className={styles.meta}>
            {study.role} · {study.period}
          </p>
          <h1 className={styles.title}>{study.title}</h1>
        </header>

        {study.hero && <Figure figure={study.hero} featured />}

        {study.blocks.map((block, index) => (
          <Block key={`${block.type}-${index}`} block={block} />
        ))}

        <a href={homeHref} className={`${styles.back} ${styles.backFooter}`}>
          ← {homeLabel}
        </a>
      </div>
    </article>
  );
}

function Block({ block }: { block: CaseStudyBlock }) {
  if (block.type === "copy") {
    return (
      <section className={styles.section}>
        <p className={styles.label}>{block.label}</p>
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className={styles.copy}>
            {paragraph}
          </p>
        ))}
      </section>
    );
  }

  if (block.type === "figure") {
    return (
      <section className={styles.section}>
        <Figure figure={block.figure} />
      </section>
    );
  }

  if (block.type === "gallery") {
    const columns = block.columns ?? 3;
    return (
      <section className={styles.section}>
        {block.label && <p className={styles.label}>{block.label}</p>}
        {block.intro && <p className={styles.copy}>{block.intro}</p>}
        <div
          className={styles.visuals}
          data-columns={columns}
        >
          {block.images.map((image) => (
            <Figure key={image.src} figure={image} />
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "cards") {
    return (
      <section className={styles.section}>
        <p className={styles.label}>{block.label}</p>
        {block.intro && <p className={styles.copy}>{block.intro}</p>}
        <div className={styles.cards}>
          {block.items.map((item) => (
            <a
              key={item.href}
              className={styles.card}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.image} alt={item.alt} />
              <div className={styles.cardBody}>
                <p className={styles.cardTitle}>{item.title}</p>
                {item.subtitle && <p className={styles.cardSub}>{item.subtitle}</p>}
                <p className={styles.cardLink}>Read the case study →</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "logos") {
    return (
      <section className={styles.section}>
        {block.label && <p className={styles.label}>{block.label}</p>}
        {block.intro && <p className={styles.copy}>{block.intro}</p>}
        <div className={styles.logos}>
          {block.images.map((image) => (
            <div key={image.src} className={styles.logoTile}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <a
      className={styles.external}
      href={block.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {block.label} →
    </a>
  );
}

function Figure({
  figure,
  featured = false,
}: {
  figure: CaseStudyFigure;
  featured?: boolean;
}) {
  const fit = figure.fit ?? "cover";
  const img = (
    <img src={figure.src} alt={figure.alt} data-fit={fit} />
  );

  return (
    <figure className={`${styles.figure} ${featured ? styles.featured : ""}`}>
      {figure.href ? (
        <a href={figure.href} target="_blank" rel="noopener noreferrer">
          {img}
        </a>
      ) : (
        img
      )}
      {figure.caption && <figcaption>{figure.caption}</figcaption>}
    </figure>
  );
}
