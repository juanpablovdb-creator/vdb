import { navLinks } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Nav.module.css";

export function Nav() {
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={`container ${styles.navInner}`}>
        <a href="#" className={styles.logo}>
          JP
        </a>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.link} ${activeId === link.id ? styles.linkActive : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
