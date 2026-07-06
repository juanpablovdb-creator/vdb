import type { CSSProperties } from "react";
import type { ArtType, BrandColors } from "../data/content";
import styles from "./CardBrandArt.module.css";

interface CardBrandArtProps {
  title: string;
  tag?: string;
  role?: string;
  brand: BrandColors;
  art: ArtType;
  size?: "default" | "large" | "compact";
  /** When false, renders the visualization only (title lives in the card body). */
  showText?: boolean;
}

/*
 * Each scene is drawn in a 320x200 viewBox using two CSS variables:
 * --brand-accent and --brand-text. Opacity layers keep them cohesive.
 */
function ArtScene({ type }: { type: ArtType }) {
  const a = "var(--brand-accent)";
  const t = "var(--brand-text)";

  switch (type) {
    case "stripboard":
      // shooting-schedule strips: colored rows of varying widths
      return (
        <g>
          <rect x="24" y="26" width="200" height="18" rx="3" fill={a} opacity="0.9" />
          <rect x="24" y="52" width="152" height="18" rx="3" fill={t} opacity="0.22" />
          <rect x="24" y="78" width="232" height="18" rx="3" fill={t} opacity="0.14" />
          <rect x="24" y="104" width="120" height="18" rx="3" fill={a} opacity="0.55" />
          <rect x="24" y="130" width="184" height="18" rx="3" fill={t} opacity="0.18" />
          <rect x="240" y="26" width="40" height="18" rx="3" fill={t} opacity="0.1" />
          <rect x="192" y="52" width="64" height="18" rx="3" fill={t} opacity="0.1" />
          <rect x="160" y="104" width="96" height="18" rx="3" fill={t} opacity="0.1" />
        </g>
      );

    case "funnel":
      // leads flowing from many nodes into one
      return (
        <g>
          {[30, 70, 110, 150].map((y, i) => (
            <circle key={y} cx="48" cy={y} r="9" fill={i === 1 ? a : t} opacity={i === 1 ? 0.9 : 0.25} />
          ))}
          {[30, 70, 110, 150].map((y) => (
            <path key={y} d={`M 57 ${y} C 120 ${y}, 130 90, 172 90`} stroke={t} strokeWidth="1.5" fill="none" opacity="0.25" />
          ))}
          <circle cx="186" cy="90" r="14" fill={a} opacity="0.9" />
          <path d="M 200 90 H 252" stroke={a} strokeWidth="2" opacity="0.7" />
          <path d="M 246 82 L 258 90 L 246 98" stroke={a} strokeWidth="2" fill="none" opacity="0.7" />
        </g>
      );

    case "chart":
      // revenue dashboard: area line + bars
      return (
        <g>
          {[60, 100, 140, 180, 220, 260].map((x, i) => (
            <rect key={x} x={x} y={150 - i * 6} width="14" height={30 + i * 6} rx="2" fill={t} opacity="0.14" />
          ))}
          <path d="M 40 140 L 90 118 L 140 126 L 190 84 L 240 92 L 288 48" stroke={a} strokeWidth="2.5" fill="none" />
          <path d="M 40 140 L 90 118 L 140 126 L 190 84 L 240 92 L 288 48 V 180 H 40 Z" fill={a} opacity="0.12" />
          {[
            [90, 118],
            [190, 84],
            [288, 48],
          ].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="4" fill={a} />
          ))}
        </g>
      );

    case "timeline":
      // video editor tracks with clips and a playhead
      return (
        <g>
          <rect x="24" y="40" width="110" height="24" rx="3" fill={a} opacity="0.85" />
          <rect x="142" y="40" width="80" height="24" rx="3" fill={a} opacity="0.45" />
          <rect x="230" y="40" width="60" height="24" rx="3" fill={a} opacity="0.7" />
          <rect x="24" y="76" width="70" height="24" rx="3" fill={t} opacity="0.2" />
          <rect x="102" y="76" width="140" height="24" rx="3" fill={t} opacity="0.13" />
          <rect x="24" y="112" width="180" height="14" rx="3" fill={t} opacity="0.1" />
          <path d="M 168 24 V 146" stroke={t} strokeWidth="1.5" opacity="0.7" />
          <path d="M 161 24 h 14 l -7 10 z" fill={t} opacity="0.7" />
        </g>
      );

    case "calendar":
      // occupancy calendar: month grid with booked nights
      return (
        <g>
          {Array.from({ length: 28 }, (_, i) => {
            const col = i % 7;
            const row = Math.floor(i / 7);
            const booked = [2, 3, 4, 9, 10, 11, 12, 16, 17, 23, 24, 25].includes(i);
            return (
              <rect
                key={i}
                x={48 + col * 34}
                y={34 + row * 34}
                width="26"
                height="26"
                rx="4"
                fill={booked ? a : t}
                opacity={booked ? 0.8 : 0.12}
              />
            );
          })}
        </g>
      );

    case "vault":
      // vault dial + chain of blocks
      return (
        <g>
          <circle cx="105" cy="95" r="52" stroke={t} strokeWidth="2" fill="none" opacity="0.3" />
          <circle cx="105" cy="95" r="34" stroke={a} strokeWidth="2.5" fill="none" opacity="0.9" />
          {Array.from({ length: 8 }, (_, i) => {
            const ang = (i * Math.PI) / 4;
            return (
              <line
                key={i}
                x1={105 + Math.cos(ang) * 38}
                y1={95 + Math.sin(ang) * 38}
                x2={105 + Math.cos(ang) * 48}
                y2={95 + Math.sin(ang) * 48}
                stroke={t}
                strokeWidth="2"
                opacity="0.4"
              />
            );
          })}
          <circle cx="105" cy="95" r="7" fill={a} />
          <rect x="188" y="80" width="30" height="30" rx="5" stroke={a} strokeWidth="2" fill="none" opacity="0.85" />
          <rect x="230" y="80" width="30" height="30" rx="5" stroke={t} strokeWidth="2" fill="none" opacity="0.4" />
          <line x1="218" y1="95" x2="230" y2="95" stroke={t} strokeWidth="2" opacity="0.5" />
        </g>
      );

    case "arrow":
      // growth trajectory
      return (
        <g>
          <path d="M 40 150 L 110 120 L 160 132 L 258 56" stroke={a} strokeWidth="3" fill="none" />
          <path d="M 236 52 L 262 52 L 258 78" stroke={a} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {[
            [40, 150],
            [110, 120],
            [160, 132],
          ].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="4.5" fill={t} opacity="0.5" />
          ))}
        </g>
      );

    case "bars":
      return (
        <g>
          {[
            [56, 60],
            [98, 84],
            [140, 72],
            [182, 110],
            [224, 140],
          ].map(([x, h], i) => (
            <rect key={x} x={x} y={168 - h} width="26" height={h} rx="3" fill={i === 4 ? a : t} opacity={i === 4 ? 0.9 : 0.2 + i * 0.06} />
          ))}
          <line x1="44" y1="168" x2="276" y2="168" stroke={t} strokeWidth="1.5" opacity="0.35" />
        </g>
      );

    case "play":
      return (
        <g>
          <circle cx="160" cy="96" r="52" stroke={t} strokeWidth="2" fill="none" opacity="0.3" />
          <circle cx="160" cy="96" r="52" stroke={a} strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="82 245" strokeLinecap="round" />
          <path d="M 146 72 L 186 96 L 146 120 Z" fill={a} opacity="0.9" />
        </g>
      );

    case "coins":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <ellipse key={i} cx="130" cy={140 - i * 16} rx="52" ry="14" stroke={t} strokeWidth="2" fill="none" opacity={0.2 + i * 0.08} />
          ))}
          <ellipse cx="130" cy="76" rx="52" ry="14" fill={a} opacity="0.85" />
          <circle cx="234" cy="120" r="26" stroke={a} strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 234 108 v 24 M 226 114 h 16 M 226 126 h 16" stroke={a} strokeWidth="2" opacity="0.6" />
        </g>
      );

    case "wave":
      return (
        <g>
          {[36, 22, 48, 64, 40, 78, 56, 30, 66, 44, 24, 52, 70, 38, 26].map((h, i) => (
            <rect key={i} x={40 + i * 17} y={96 - h / 2} width="7" height={h} rx="3.5" fill={i >= 5 && i <= 9 ? a : t} opacity={i >= 5 && i <= 9 ? 0.9 : 0.25} />
          ))}
        </g>
      );

    case "hex":
      return (
        <g>
          <path d="M 160 30 L 218 63 V 129 L 160 162 L 102 129 V 63 Z" stroke={t} strokeWidth="2" fill="none" opacity="0.35" />
          <path d="M 160 58 L 194 77 V 115 L 160 134 L 126 115 V 77 Z" stroke={a} strokeWidth="2.5" fill="none" opacity="0.9" />
          {[
            [160, 30],
            [218, 63],
            [218, 129],
            [160, 162],
            [102, 129],
            [102, 63],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill={a} opacity="0.8" />
          ))}
        </g>
      );

    case "aperture":
      return (
        <g>
          <circle cx="160" cy="96" r="56" stroke={t} strokeWidth="2" fill="none" opacity="0.35" />
          {Array.from({ length: 6 }, (_, i) => {
            const ang = (i * Math.PI) / 3;
            const x1 = 160 + Math.cos(ang) * 54;
            const y1 = 96 + Math.sin(ang) * 54;
            const x2 = 160 + Math.cos(ang + Math.PI / 1.8) * 20;
            const y2 = 96 + Math.sin(ang + Math.PI / 1.8) * 20;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={a} strokeWidth="2.5" opacity="0.8" />;
          })}
          <circle cx="160" cy="96" r="16" stroke={a} strokeWidth="2" fill="none" opacity="0.9" />
        </g>
      );

    case "mic":
      return (
        <g>
          <rect x="140" y="36" width="40" height="72" rx="20" fill={a} opacity="0.85" />
          <path d="M 118 92 a 42 42 0 0 0 84 0" stroke={t} strokeWidth="2.5" fill="none" opacity="0.5" />
          <line x1="160" y1="134" x2="160" y2="158" stroke={t} strokeWidth="2.5" opacity="0.5" />
          <line x1="136" y1="158" x2="184" y2="158" stroke={t} strokeWidth="2.5" opacity="0.5" />
        </g>
      );

    case "light":
      // studio softbox with rays
      return (
        <g>
          <rect x="112" y="44" width="96" height="68" rx="6" transform="rotate(-8 160 78)" stroke={a} strokeWidth="2.5" fill="none" opacity="0.85" />
          <line x1="128" y1="60" x2="196" y2="50" stroke={a} strokeWidth="1.5" opacity="0.4" />
          <line x1="130" y1="76" x2="198" y2="66" stroke={a} strokeWidth="1.5" opacity="0.4" />
          <line x1="132" y1="92" x2="200" y2="82" stroke={a} strokeWidth="1.5" opacity="0.4" />
          <line x1="160" y1="118" x2="152" y2="164" stroke={t} strokeWidth="2.5" opacity="0.5" />
          <line x1="128" y1="164" x2="176" y2="164" stroke={t} strokeWidth="2.5" opacity="0.5" />
          {[
            [92, 40],
            [86, 76],
            [230, 36],
          ].map(([x, y]) => (
            <line key={`${x}-${y}`} x1={x} y1={y} x2={x - 14} y2={y - 10} stroke={t} strokeWidth="2" opacity="0.35" />
          ))}
        </g>
      );

    case "people":
      return (
        <g>
          {[
            [110, 0.4],
            [160, 0.9],
            [210, 0.4],
          ].map(([x, o], i) => (
            <g key={x} opacity={o as number}>
              <circle cx={x as number} cy={i === 1 ? 74 : 84} r="15" fill={i === 1 ? a : t} />
              <path
                d={`M ${(x as number) - 26} 150 a 26 26 0 0 1 52 0`}
                fill={i === 1 ? a : t}
              />
            </g>
          ))}
        </g>
      );

    case "mountain":
      return (
        <g>
          <circle cx="230" cy="56" r="18" fill={a} opacity="0.85" />
          <path d="M 40 156 L 118 68 L 170 128 L 204 92 L 280 156 Z" fill={t} opacity="0.25" />
          <path d="M 40 156 L 118 68 L 160 116 L 128 156 Z" fill={t} opacity="0.35" />
        </g>
      );

    case "cut":
      // editing: two clips and a cut line
      return (
        <g>
          <rect x="40" y="72" width="108" height="48" rx="4" fill={t} opacity="0.2" />
          <rect x="172" y="72" width="108" height="48" rx="4" fill={a} opacity="0.7" />
          <line x1="160" y1="48" x2="160" y2="144" stroke={t} strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
          <circle cx="160" cy="40" r="6" stroke={t} strokeWidth="2" fill="none" opacity="0.6" />
          <circle cx="160" cy="152" r="6" stroke={t} strokeWidth="2" fill="none" opacity="0.6" />
        </g>
      );

    case "frames":
      // filmstrip frames
      return (
        <g>
          <rect x="48" y="56" width="224" height="80" rx="6" stroke={t} strokeWidth="2" fill="none" opacity="0.4" />
          {[62, 118, 174, 230].map((x, i) => (
            <rect key={x} x={x} y="70" width="42" height="52" rx="3" fill={i === 1 ? a : t} opacity={i === 1 ? 0.8 : 0.18} />
          ))}
          {[60, 92, 124, 156, 188, 220, 252].map((x) => (
            <g key={x}>
              <rect x={x} y="46" width="8" height="6" rx="1.5" fill={t} opacity="0.4" />
              <rect x={x} y="140" width="8" height="6" rx="1.5" fill={t} opacity="0.4" />
            </g>
          ))}
        </g>
      );

    case "reel":
      return (
        <g>
          <circle cx="150" cy="96" r="54" stroke={t} strokeWidth="2.5" fill="none" opacity="0.45" />
          <circle cx="150" cy="96" r="10" fill={a} />
          {Array.from({ length: 5 }, (_, i) => {
            const ang = (i * 2 * Math.PI) / 5 - Math.PI / 2;
            return (
              <circle
                key={i}
                cx={150 + Math.cos(ang) * 30}
                cy={96 + Math.sin(ang) * 30}
                r="11"
                stroke={a}
                strokeWidth="2"
                fill="none"
                opacity="0.75"
              />
            );
          })}
          <path d="M 202 110 Q 250 130 268 162" stroke={t} strokeWidth="2.5" fill="none" opacity="0.5" />
        </g>
      );
  }
}

export function CardBrandArt({
  title,
  tag,
  role,
  brand,
  art,
  size = "default",
  showText = true,
}: CardBrandArtProps) {
  const sizeClass =
    size === "large"
      ? styles["brand--large"]
      : size === "compact"
        ? styles["brand--compact"]
        : "";

  return (
    <div
      className={`${styles.brand} ${sizeClass}`}
      style={
        {
          "--brand-bg": brand.bg,
          "--brand-bg-2": brand.bgSecondary,
          "--brand-text": brand.text,
          "--brand-accent": brand.accent,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <div className={styles.brandGlow} />
      <svg
        className={`${styles.artLayer} ${showText ? "" : styles.artLayerFull}`}
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
      >
        <ArtScene type={art} />
      </svg>
      {showText && (
        <div className={styles.brandContent}>
          {tag && <span className={styles.brandTag}>{tag}</span>}
          <p className={styles.brandTitle}>{title}</p>
          {role && <span className={styles.brandRole}>{role}</span>}
        </div>
      )}
    </div>
  );
}
