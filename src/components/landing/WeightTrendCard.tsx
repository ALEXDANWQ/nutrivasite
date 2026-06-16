import { useId } from "react";
import { cn } from "@/lib/utils";
import { Droplets, Dumbbell, Flame } from "lucide-react";

export type WeightTrendStat = {
  label: string;
  value: string;
  color: string;
  width: string;
};

type WeightTrendCardProps = {
  title?: string;
  value: string;
  delta: string;
  points: number[];
  stats?: WeightTrendStat[];
  className?: string;
};

export function WeightTrendCard({
  title = "Динамика веса",
  value,
  delta,
  points,
  stats = [],
  className,
}: WeightTrendCardProps) {
  const gradientId = useId().replaceAll(":", "");
  const chartPoints = points.length > 1 ? points : [72.8, 72.4];
  const chartWidth = 320;
  const chartHeight = 140;
  const topPadding = 26;
  const bottomPadding = 112;
  const minimum = Math.min(...chartPoints);
  const maximum = Math.max(...chartPoints);
  const chartRange = maximum - minimum || 1;
  const deltaTone = delta.startsWith("-")
    ? "bg-mint text-primary-deep"
    : "bg-[#FFF4E5] text-[#C17A00]";
  const statIcons = [Flame, Droplets, Dumbbell];

  const coordinates = chartPoints.map((point, index) => {
    const x = (chartWidth / (chartPoints.length - 1)) * index;
    const progress = (point - minimum) / chartRange;
    const y = bottomPadding - progress * (bottomPadding - topPadding);

    return {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
    };
  });

  const linePath = coordinates
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`)
    .join(" ");
  const areaPath = `${linePath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;

  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-white/70 bg-white/84 p-4 shadow-[0_24px_70px_-42px_rgba(17,24,39,0.22)] backdrop-blur-xl sm:p-7",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium text-muted-foreground sm:text-xs">{title}</p>
          <p className="mt-1 font-display text-[34px] font-black leading-none tracking-[-0.04em] sm:text-[42px]">
            {value}
          </p>
        </div>
        <span
          className={cn(
            "rounded-full px-3 py-1.5 text-[12px] font-bold whitespace-nowrap",
            deltaTone,
          )}
        >
          {delta}
        </span>
      </div>

      <div className="mx-auto mt-6 w-full max-w-[640px]">
        <div className="aspect-[320/140] w-full">
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            preserveAspectRatio="xMidYMid meet"
            className="h-full w-full overflow-visible"
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#36C978" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#36C978" stopOpacity="0" />
              </linearGradient>
            </defs>

            {[0, 1, 2, 3].map((line) => {
              const y = 24 + line * 28;
              return (
                <line
                  key={line}
                  x1="0"
                  x2={chartWidth}
                  y1={y}
                  y2={y}
                  stroke="#D9E3DD"
                  strokeDasharray="4 6"
                />
              );
            })}

            <path d={areaPath} fill={`url(#${gradientId})`} />
            <path
              d={linePath}
              fill="none"
              stroke="#159957"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {coordinates.map((point, index) => (
              <circle
                key={index}
                cx={point.x}
                cy={point.y}
                r="3.6"
                fill="white"
                stroke="#159957"
                strokeWidth="2"
              />
            ))}
          </svg>
        </div>
      </div>

      {stats.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = statIcons[index] ?? Flame;

            return (
              <div
                key={stat.label}
                className="relative isolate min-w-0 overflow-hidden rounded-2xl border p-3.5 shadow-[0_14px_34px_-28px_rgba(17,24,39,0.4)] sm:p-4"
                style={{
                  background: `linear-gradient(145deg, ${stat.color}1F 0%, rgba(255,255,255,0.9) 46%, rgba(255,255,255,0.68) 100%)`,
                  borderColor: `${stat.color}24`,
                }}
              >
                <div
                  className="pointer-events-none absolute -right-5 -top-8 h-20 w-20 rounded-full opacity-20 blur-2xl"
                  style={{ background: stat.color }}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-[22px] font-black leading-none tracking-tight text-foreground">
                      {stat.value}
                    </p>
                  </div>

                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ background: `${stat.color}18`, color: stat.color }}
                  >
                    <Icon aria-hidden className="h-4 w-4" strokeWidth={2.35} />
                  </div>
                </div>

                <div className="relative mt-4">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.78)]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: stat.width, background: stat.color }}
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] font-bold text-muted-foreground">
                    <span>цель</span>
                    <span style={{ color: stat.color }}>{stat.width}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
