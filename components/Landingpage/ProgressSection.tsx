import React from "react";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    value: "+300",
    description: "We have successfully completed a total of 300+ projects",
    illustration: "rocket",
  },
  {
    value: "100K",
    description:
      "We've gathered dozens of reviews from the clients and +100k reviews from their users",
    illustration: "megaphone",
  },
  {
    value: "+10",
    description: "Years of experience",
    illustration: "hourglass",
  },
  {
    value: "+280",
    description: "Team members all over the world",
    illustration: "team",
  },
];

const radarMetrics = [
  { label: "Marketing Performance", value: 85.0 },
  { label: "Development Speed", value: 92.5 },
  { label: "User Engagement", value: 78.0 },
  { label: "Conversion Rate", value: 61.3 },
  { label: "SEO Ranking", value: 90.0 },
];

const avgScore = 81.4;

function StatIllustration({ type }: { type: string }) {
  const className = "h-full w-full text-[#8a9bab]";

  if (type === "rocket") {
    return (
      <svg viewBox="0 0 120 90" fill="none" className={className} aria-hidden>
        <rect
          x="18"
          y="52"
          width="10"
          height="22"
          rx="2"
          fill="currentColor"
          opacity="0.35"
        />
        <rect
          x="32"
          y="44"
          width="10"
          height="30"
          rx="2"
          fill="currentColor"
          opacity="0.5"
        />
        <rect
          x="46"
          y="36"
          width="10"
          height="38"
          rx="2"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M78 18 L88 48 L78 42 L68 48 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <path d="M78 42 L78 58" stroke="currentColor" strokeWidth="2" />
        <path d="M72 48 L84 48" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "megaphone") {
    return (
      <svg viewBox="0 0 120 90" fill="none" className={className} aria-hidden>
        <path
          d="M28 38 L52 30 L52 60 L28 52 Z"
          fill="currentColor"
          opacity="0.75"
        />
        <path
          d="M52 30 C68 24 78 34 78 45 C78 56 68 66 52 60"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M78 45 H92"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.5"
        />
        <path
          d="M82 38 H96"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.35"
        />
        <path
          d="M82 52 H96"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.35"
        />
      </svg>
    );
  }

  if (type === "hourglass") {
    return (
      <svg viewBox="0 0 120 90" fill="none" className={className} aria-hidden>
        <circle cx="24" cy="45" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="45" r="4" fill="currentColor" opacity="0.5" />
        <circle cx="96" cy="45" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="96" cy="45" r="4" fill="currentColor" opacity="0.5" />
        <path
          d="M48 22 H72 V32 L60 45 L72 58 V68 H48 V58 L60 45 L48 32 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.15"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 90" fill="none" className={className} aria-hidden>
      {[
        [30, 28],
        [52, 28],
        [74, 28],
        [30, 50],
        [52, 50],
        [74, 50],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="11" fill="currentColor" opacity="0.2" />
          <circle
            cx={cx}
            cy={cy - 3}
            r="5"
            fill="currentColor"
            opacity="0.55"
          />
          <path
            d={`M${cx - 6} ${cy + 8} Q${cx} ${cy + 2} ${cx + 6} ${cy + 8}`}
            fill="currentColor"
            opacity="0.4"
          />
        </g>
      ))}
    </svg>
  );
}

function RadarChart() {
  const cx = 200;
  const cy = 200;
  const maxR = 118;
  const levels = 5;

  const axisAngle = (index: number) =>
    -Math.PI / 2 + index * ((2 * Math.PI) / 5);

  const pointAt = (value: number, axisIndex: number) => {
    const angle = axisAngle(axisIndex);
    const r = (value / 100) * maxR;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  const gridPolygon = (scale: number) =>
    Array.from({ length: 5 }, (_, i) => {
      const angle = axisAngle(i);
      const r = maxR * scale;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(" ");

  const dataPoints = radarMetrics.map((metric, i) => pointAt(metric.value, i));
  const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <svg
        viewBox="0 0 400 400"
        className="h-auto w-full"
        role="img"
        aria-label="Performance radar chart"
      >
        {Array.from({ length: levels }, (_, i) => (
          <polygon
            key={i}
            points={gridPolygon((i + 1) / levels)}
            fill="none"
            stroke="#d8d8d8"
            strokeWidth="1"
          />
        ))}

        {radarMetrics.map((_, i) => {
          const angle = axisAngle(i);
          const x2 = cx + maxR * Math.cos(angle);
          const y2 = cy + maxR * Math.sin(angle);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke="#d8d8d8"
              strokeWidth="1"
            />
          );
        })}

        <polygon
          points={dataPolygon}
          fill="#d9dde2"
          fillOpacity="0.85"
          stroke="#9aa3ad"
          strokeWidth="1.5"
        />

        {dataPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="#7b8794" />
        ))}

        <text
          x={cx}
          y={cy - 8}
          textAnchor="middle"
          className="fill-black text-[13px] font-semibold"
        >
          Avg Score
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          className="fill-black text-[15px] font-bold"
        >
          {avgScore}
        </text>

        {radarMetrics.map((metric, i) => {
          const angle = axisAngle(i);
          const labelR = maxR + 42;
          const x = cx + labelR * Math.cos(angle);
          const y = cy + labelR * Math.sin(angle);
          const anchor =
            Math.abs(Math.cos(angle)) < 0.2
              ? "middle"
              : Math.cos(angle) > 0
                ? "start"
                : "end";

          return (
            <g key={metric.label}>
              <text
                x={x}
                y={y - 4}
                textAnchor={anchor}
                className="fill-[#666] text-[11px]"
              >
                {metric.label}
              </text>
              <text
                x={x}
                y={y + 12}
                textAnchor={anchor}
                className="fill-black text-[12px] font-semibold"
              >
                {metric.value.toFixed(1)}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

const ProgressSection = () => {
  return (
    <section className="bg-[#f9f9f9] min-h-screen h-auto md:h-screen px-6 py-16 font-sans text-[#1a1a1a] antialiased md:px-12 md:py-20 flex items-center">
      <div className="w-full">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-[2.35rem] md:leading-tight">
            We Strive to Innovate
          </h2>

          <button
            type="button"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#ececec] px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#e2e2e2] cursor-pointer"
          >
            Become a Client
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-[#888] md:text-base mt-4">
          <span className="font-semibold text-black">Solid Strategy</span>{" "}
          aligned with business needs and robust data analysis are fundamental
          ingredients to extract actionable insights
        </p>

        <div className="mt-12 flex flex-col lg:flex-row justify-between lg:items-end gap-12">
          <div className="flex flex-col w-full lg:w-1/2">

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <article
                  key={stat.value}
                  className="relative flex min-h-46 flex-col justify-between overflow-hidden rounded-2xl bg-[#ebebeb] p-5"
                >
                  <div className="relative z-10 max-w-[70%]">
                    <p className="text-3xl font-bold tracking-tight md:text-[2rem]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#777] md:text-[0.8rem]">
                      {stat.description}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-2 right-1 h-20 w-24 opacity-90 md:h-24 md:w-28">
                    <StatIllustration type={stat.illustration} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center lg:pt-6 w-full lg:w-1/3">
            <RadarChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
