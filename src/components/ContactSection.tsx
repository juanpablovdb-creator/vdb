import { contact } from "../data/content";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>Let's work together</h2>

          <div className={styles.availability}>
            {contact.availability.map((item) => (
              <span key={item} className={styles.badge}>
                Available for {item}
              </span>
            ))}
          </div>

          <div className={styles.actions}>
            <a href={`mailto:${contact.email}`} className={styles.primaryBtn}>
              {contact.email}
            </a>
            <a
              href={contact.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Book a call →
            </a>
          </div>

          <nav className={styles.social} aria-label="Social links">
            {contact.social.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} Juan Pablo · Built with vibe
        </footer>
      </div>
    </section>
  );
}
