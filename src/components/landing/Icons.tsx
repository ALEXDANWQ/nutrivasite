import type { SVGProps } from "react";

// Premium duotone icon system — thin strokes + soft accent fills.
// Use currentColor for stroke; fills use a subtle opacity layer.

const wrap = (children: React.ReactNode, p: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    {...p}
  >
    {children}
  </svg>
);

const accent = "currentColor";
const softFill = { fill: accent, fillOpacity: 0.12, stroke: "none" } as const;

export const IconDiary = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <path {...softFill} d="M6 3.5h10.5a2.5 2.5 0 0 1 2.5 2.5v11.5H8.5A2.5 2.5 0 0 0 6 20V3.5z" />
      <path d="M6 3.5h10.5a2.5 2.5 0 0 1 2.5 2.5v12a2.5 2.5 0 0 1-2.5 2.5H6V3.5z" />
      <path d="M6 17.5h13" />
      <path d="M10 8h6M10 11.5h4" />
    </>,
    p,
  );

export const IconFlame = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <path {...softFill} d="M12 3.5c1.4 3 4.5 4.3 4.5 8.5a4.5 4.5 0 1 1-9 0c0-2 1-3.5 2.3-4.6-.5 2.6 1.2 3.4 1.2 3.4s-1.2-3 1-7.3z" />
      <path d="M12 3.5c1.4 3 4.5 4.3 4.5 8.5a4.5 4.5 0 1 1-9 0c0-2 1-3.5 2.3-4.6-.5 2.6 1.2 3.4 1.2 3.4s-1.2-3 1-7.3z" />
    </>,
    p,
  );

export const IconRing = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <circle cx="12" cy="12" r="8" {...softFill} />
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4a8 8 0 0 1 7.4 11" strokeWidth={2} />
    </>,
    p,
  );

export const IconScan = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" {...softFill} />
      <path d="M4 8V6a2 2 0 0 1 2-2h2M20 8V6a2 2 0 0 0-2-2h-2M4 16v2a2 2 0 0 0 2 2h2M20 16v2a2 2 0 0 1-2 2h-2" />
      <path d="M8 8.5v7M11 8.5v7M14 8.5v7M16.5 8.5v7" />
    </>,
    p,
  );

export const IconPlus = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <circle cx="12" cy="12" r="8.5" {...softFill} />
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v8M8 12h8" />
    </>,
    p,
  );

export const IconStar = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <path
        {...softFill}
        d="M12 3.5l2.7 5.5 6 .9-4.4 4.3 1 6L12 17.4l-5.4 2.8 1-6L3.3 9.9l6-.9z"
      />
      <path d="M12 3.5l2.7 5.5 6 .9-4.4 4.3 1 6L12 17.4l-5.4 2.8 1-6L3.3 9.9l6-.9z" />
    </>,
    p,
  );

export const IconDrop = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <path {...softFill} d="M12 3c3.5 4.5 6.5 7.8 6.5 11.5a6.5 6.5 0 1 1-13 0C5.5 10.8 8.5 7.5 12 3z" />
      <path d="M12 3c3.5 4.5 6.5 7.8 6.5 11.5a6.5 6.5 0 1 1-13 0C5.5 10.8 8.5 7.5 12 3z" />
      <path d="M9 14a3 3 0 0 0 2 3" strokeOpacity={0.5} />
    </>,
    p,
  );

export const IconScale = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="3.5" {...softFill} />
      <rect x="3" y="4.5" width="18" height="15" rx="3.5" />
      <path d="M8 11.5c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" />
      <circle cx="12" cy="14.5" r="1.1" fill="currentColor" stroke="none" />
    </>,
    p,
  );

export const IconBolt = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <path {...softFill} d="M13 3L5 14h6l-1 7 8-11h-6z" />
      <path d="M13 3L5 14h6l-1 7 8-11h-6z" />
    </>,
    p,
  );

export const IconEye = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <path {...softFill} d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z" />
      <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </>,
    p,
  );

export const IconLeaf = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <path {...softFill} d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
      <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
      <path d="M5 19c4-4 8-7 14-14" strokeOpacity={0.6} />
    </>,
    p,
  );

export const IconArrowDown = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <path d="M12 4v14M6 13l6 6 6-6" />
    </>,
    p,
  );

export const IconArrowRight = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>,
    p,
  );

export const IconBottle = (p: SVGProps<SVGSVGElement>) =>
  wrap(
    <>
      <path {...softFill} d="M9 3h6v2.5c0 .8.3 1.5.9 2L17 9.2c.6.6.9 1.4.9 2.2V19a2 2 0 0 1-2 2H8.1a2 2 0 0 1-2-2v-7.6c0-.8.3-1.6.9-2.2L8.1 7.5c.6-.5.9-1.2.9-2V3z" />
      <path d="M9 3h6v2.5c0 .8.3 1.5.9 2L17 9.2c.6.6.9 1.4.9 2.2V19a2 2 0 0 1-2 2H8.1a2 2 0 0 1-2-2v-7.6c0-.8.3-1.6.9-2.2L8.1 7.5c.6-.5.9-1.2.9-2V3z" />
      <path d="M6.5 13.5h11" strokeOpacity={0.5} />
    </>,
    p,
  );
