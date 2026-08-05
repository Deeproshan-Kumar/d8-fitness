import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const DashboardStatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  isPositive,
  period,
  icon: Icon,
  iconBg,
  iconColor,
}) => {
  return (
    <article className="relative rounded-sm border border-border bg-secondary p-4 space-y-2.5 overflow-hidden transition-all duration-200 hover:border-border-strong">
      <div className="center-y justify-between">
        <div className={`h-11 w-11 center rounded-sm ${iconBg} ${iconColor}`}>
          <Icon size={22} />
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-quaternary">{label}</p>
        <h3 className="mt-1 font-heading text-2xl font-bold tracking-tight text-heading tabular-nums">
          {value}
        </h3>
      </div>

      <div className="center-y gap-1.5 text-xs">
        <span
          className={`inline-flex items-center gap-0.5 font-semibold ${isPositive ? "text-emerald-400" : "text-rose-400"
            }`}
        >
          {isPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
          {change}
        </span>
        <span className="text-faint">{period}</span>
      </div>
    </article>
  );
};

export default DashboardStatCard;