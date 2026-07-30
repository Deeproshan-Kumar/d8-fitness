import React from "react";
import { categories } from "../../../constants/dashboard";
import Button from "./Button";

const MemberDistributionChart: React.FC = () => {
  const total = 1246;

  // Donut parameters
  const size = 160;
  const strokeWidth = 22;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate stroke-dasharray & stroke-dashoffset for each arc
  let cumulativePercent = 0;

  return (
    <article className="h-full rounded-sm border border-border bg-secondary flex flex-col justify-between p-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/40 pb-4">
        <h4 className="text-base text-heading">Member Distribution</h4>
        <Button
          variant="tertiary"
          className="bg-surface-2 border border-border"
        >
          <span>View All</span>
        </Button>
      </div>

      {/* Donut & Legend Container */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-auto py-4">
        {/* SVG Donut */}
        <div className="relative flex items-center justify-center w-full lg:w-1/3">
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
            {/* Background ring */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#161c29"
              strokeWidth={strokeWidth}
            />

            {/* Segments */}
            {categories.map((cat, i) => {
              const strokeDasharray = `${(cat.percentage / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -((cumulativePercent / 100) * circumference);
              cumulativePercent += cat.percentage;

              return (
                <circle
                  key={i}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke={cat.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-500 hover:opacity-80"
                />
              );
            })}
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-heading text-2xl font-extrabold tracking-tight text-heading tabular-nums">
              {total.toLocaleString()}
            </span>
            <span className="text-sm font-medium text-quaternary uppercase tracking-wider">Total</span>
          </div>
        </div>

        {/* Legend */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-4 max-w-[250px] w-full mx-auto">
            {categories.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between gap-2.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${cat.dotBg}`}></span>
                  <span className="font-medium text-body">{cat.name}</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-heading tabular-nums">{cat.count}</span>
                  <span className="text-faint font-normal ml-1">({cat.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default MemberDistributionChart;
