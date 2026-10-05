import type { SVGProps } from "react";

export default function FiberLogo({
  className = "text-slate-900 dark:text-white",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="40 50 430 200"
      role="img"
      aria-label="Fiber"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="50" y="60" width="180" height="180" rx="40" fill="#0F6E56" />

      <g transform="translate(128,162) rotate(45) scale(0.55) translate(0,-57)">
        <path
          d="M-13 -33.57 L-13 -8 A13 13 0 0 0 13 -8 L13 -33.57 A36 36 0 1 1 -13 -33.57 Z"
          fill="#FFFFFF"
        />
        <rect x="-11" y="20" width="22" height="130" rx="11" fill="#FFFFFF" />
        <circle cx="0" cy="135" r="5" fill="#0F6E56" />
      </g>

      <path d="M170 118 Q182 100 200 92" fill="none" stroke="#5DCAA5" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M174 124 Q192 114 212 114" fill="none" stroke="#9FE1CB" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M167 112 Q169 96 176 80" fill="none" stroke="#5DCAA5" strokeWidth="3.5" strokeLinecap="round" />

      <text
        x="262"
        y="170"
        fontSize="76"
        fontWeight="500"
        letterSpacing="-1"
        fill="currentColor"
        style={{ fontFamily: "inherit" }}
      >
        Fiber
      </text>
    </svg>
  );
}