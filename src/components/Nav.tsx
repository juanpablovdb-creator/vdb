import { useEffect, useState } from "react";
import { navLinks } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Nav.module.css";

export function Nav() {
  const activeId = useScrollSpy(navLinks.map((l) => l.id));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
      aria-label="Main navigation"
    >
      <div className={`container ${styles.navInner}`}>
        <a href="#" className={styles.logo}>
          VDB
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
