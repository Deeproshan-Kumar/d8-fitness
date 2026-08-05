import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { weeklyData } from "../../../constants/dashboard";
import Button from "./Button";

const RevenueChart: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(3); // Default 17 May highlighted as in mockup
  const [timeframe, setTimeframe] = useState<string>("Weekly");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const maxValue = 25000;
  const chartHeight = 180;
  const chartWidth = 500;
  const paddingX = 40;
  const paddingY = 20;

  // Calculate coordinates
  const points = weeklyData.map((pt, i) => {
    const x = paddingX + (i * (chartWidth - paddingX * 2)) / (weeklyData.length - 1);
    const y = chartHeight - paddingY - (pt.value / maxValue) * (chartHeight - paddingY * 2);
    return { x, y, ...pt };
  });

  // Generate smooth cubic bezier SVG path
  const createSmoothPath = (pts: { x: number; y: number }[]) => {
    if (pts.length < 2) return "";
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const curr = pts[i];
      const next = pts[i + 1];
      const mx = (curr.x + next.x) / 2;
      d += ` C ${mx},${curr.y} ${mx},${next.y} ${next.x},${next.y}`;
    }
    return d;
  };

  const linePath = createSmoothPath(points);
  const areaPath = `${linePath} L ${points[points.length - 1].x},${chartHeight - paddingY} L ${points[0].x},${chartHeight - paddingY} Z`;

  const activePoint = hoveredIndex !== null ? points[hoveredIndex] : points[3];

  return (
    <article className="h-full bg-secondary flex flex-col justify-between rounded-sm border border-border p-4">
      {/* Header */}
      <div className="center-y justify-between border-b border-border/40 pb-4">
        <h4 className="font-heading text-base">Revenue Overview</h4>
        <div className="relative">
          <Button
            variant="tertiary"
            className="bg-surface-2 border border-border"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{timeframe}</span>
            <ChevronDown size={14} className="text-quaternary" />
          </Button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full w-28 rounded-lg border border-border bg-surface-2 shadow-xl z-20">
              {["Weekly", "Monthly", "Yearly"].map((option) => (
                <Button
                  variant="tertiary"
                  key={option}
                  onClick={() => {
                    setTimeframe(option);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full ${timeframe === option
                    ? "bg-primary-soft text-primary"
                    : "text-body hover:bg-surface-3 hover:text-heading"
                    }`}
                >
                  {option}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SVG Chart */}
      <div className="relative w-full mt-4">
        {/* Active Tooltip */}
        {activePoint && (
          <div
            className="absolute z-10 -translate-x-1/2 transition-all duration-200 pointer-events-none"
            style={{
              left: `${(activePoint.x / chartWidth) * 100}%`,
              top: `${(activePoint.y / chartHeight) * 100 - 18}%`,
            }}
          >
            <div className="rounded-lg border border-primary/30 bg-surface-3/95 px-2.5 py-1.5 shadow-xl backdrop-blur-md text-center ring-1 ring-primary/20">
              <p className="text-[10px] font-medium text-quaternary whitespace-nowrap">{activePoint.fullDate}</p>
              <p className="text-xs font-bold text-heading whitespace-nowrap">{activePoint.displayValue}</p>
            </div>
            {/* Tooltip arrow */}
            <div className="mx-auto -mt-1 h-2 w-2 rotate-45 border-r border-b border-primary/30 bg-surface-3"></div>
          </div>
        )}

        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-48 overflow-visible">
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
              <stop offset="90%" stopColor="var(--color-primary)" stopOpacity="0.0" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid lines & Y Axis */}
          {[25000, 20000, 15000, 10000, 5000, 0].map((val) => {
            const y = chartHeight - paddingY - (val / maxValue) * (chartHeight - paddingY * 2);
            return (
              <g key={val}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={chartWidth - paddingX}
                  y2={y}
                  stroke="var(--color-border)"
                  strokeWidth="1"
                  strokeDasharray={val === 0 ? "0" : "4 4"}
                />
                <text
                  x={paddingX - 8}
                  y={y + 3}
                  textAnchor="end"
                  fill="var(--color-faint)"
                  fontSize="9"
                  fontFamily="sans-serif"
                >
                  {val === 0 ? "$0" : `$${val / 1000}K`}
                </text>
              </g>
            );
          })}

          {/* X Axis Labels */}
          {points.map((pt, i) => (
            <text
              key={i}
              x={pt.x}
              y={chartHeight - 4}
              textAnchor="middle"
              fill={hoveredIndex === i ? "var(--color-heading)" : "var(--color-faint)"}
              fontSize="10"
              fontWeight={hoveredIndex === i ? "bold" : "normal"}
              fontFamily="sans-serif"
            >
              {pt.date}
            </text>
          ))}

          {/* Gradient Area Fill */}
          <path d={areaPath} fill="url(#revenueGradient)" />

          {/* Smooth Line Path */}
          <path
            d={linePath}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
          />

          {/* Interactive Data Dots & Hover Guides */}
          {points.map((pt, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <g key={i} className="cursor-pointer" onMouseEnter={() => setHoveredIndex(i)}>
                {/* Vertical guide line on hover */}
                {isHovered && (
                  <line
                    x1={pt.x}
                    y1={paddingY}
                    x2={pt.x}
                    y2={chartHeight - paddingY}
                    stroke="var(--color-primary)"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.6"
                  />
                )}
                {/* Outer halo */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 7 : 4}
                  fill="var(--color-primary)"
                  fillOpacity={isHovered ? "0.3" : "0"}
                  className="transition-all duration-200"
                />
                {/* Inner dot */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 4.5 : 3.5}
                  fill="var(--color-secondary)"
                  stroke="var(--color-primary)"
                  strokeWidth="2.5"
                  className="transition-all duration-200"
                />
              </g>
            );
          })}
        </svg>
      </div>
    </article>
  );
};

export default RevenueChart;