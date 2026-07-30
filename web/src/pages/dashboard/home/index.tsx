import React from "react";

import {
  Users,
  UserPlus,
  DollarSign,
  TrendingUp,
  Calendar,
  MoreVertical,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// Dashboard UI Components
import {
  DashboardStatCard,
  RevenueChart,
  MemberDistributionChart,
  Button,
  Badge,
} from "../../../components/dashboard/ui";

import { expiringMemberships, popularClasses, recentCheckIns, recentPayments } from "../../../constants/main";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Top Metric Stat Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-4">
        <DashboardStatCard
          label="Total Members"
          value="1,246"
          change="12.5%"
          isPositive={true}
          period="vs last 7 days"
          icon={Users}
          iconBg="bg-primary-soft"
          iconColor="text-primary"
        />
        <DashboardStatCard
          label="New Members"
          value="86"
          change="18.3%"
          isPositive={true}
          period="vs last 7 days"
          icon={UserPlus}
          iconBg="bg-blue-600/20"
          iconColor="text-blue-400"
        />
        <DashboardStatCard
          label="Total Revenue"
          value="$24,560"
          change="15.7%"
          isPositive={true}
          period="vs last 7 days"
          icon={DollarSign}
          iconBg="bg-emerald-600/20"
          iconColor="text-emerald-400"
        />
        <DashboardStatCard
          label="Pending Payments"
          value="$2,350"
          change="3.4%"
          isPositive={false}
          period="vs last 7 days"
          icon={TrendingUp}
          iconBg="bg-amber-600/20"
          iconColor="text-amber-400"
        />
        <DashboardStatCard
          label="Today's Check-ins"
          value="128"
          change="8.2%"
          isPositive={true}
          period="vs yesterday"
          icon={Calendar}
          iconBg="bg-rose-600/20"
          iconColor="text-rose-400"
        />
      </section>

      {/* Middle Row (Revenue Chart, Distribution, Recent Check-ins) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretchb mb-4">
        {/* Revenue Overview (4 Cols on XL, 6 on LG) */}
        <div className="lg:col-span-6 xl:col-span-4 min-h-[320px]">
          <RevenueChart />
        </div>

        {/* Member Distribution (4 Cols on XL, 6 on LG) */}
        <div className="lg:col-span-6 xl:col-span-4 min-h-[320px]">
          <MemberDistributionChart />
        </div>

        {/* Recent Check-ins (4 Cols on XL, 12 on LG) */}
        <div className="lg:col-span-12 xl:col-span-4 rounded-sm border border-border bg-secondary flex flex-col justify-between p-4">
          <div className="flex items-center justify-between border-b border-border/40 pb-4">
            <h4 className="text-base text-heading">
              Recent Check-ins
            </h4>
            <Button
              variant="tertiary"
              className="border border-border bg-surface-2"
            >
              View All
            </Button>
          </div>
          <div className="space-y-3 mt-4">
            {recentCheckIns.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg p-2 hover:bg-surface-2/60 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-8 w-8 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <h5 className="text-xs text-heading">
                      {item.name}
                    </h5>
                    <p className="text-xs font-medium text-faint mt-0.5">
                      {item.time}
                    </p>
                  </div>
                </div>
                <Badge label="Check-in" variant="success" />
              </div>
            ))}
          </div>

          <div className="border-t border-border/40 text-center mt-3 pt-3">
            <Button
              variant="ghost"
              className="text-primary hover:text-primary-hover"
              size="xs"
            >
              <span>View All Check-ins</span>
              <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom Row (Expiring Memberships, Recent Payments, Popular) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        {/* Membership Expiring Soon */}
        <article className="rounded-sm border border-border bg-secondary flex flex-col justify-between p-4">
          <div className="flex items-center justify-between border-b border-border/40 pb-4">
            <h4 className="text-base text-heading">
              Membership Expiring Soon
            </h4>
            <Button variant="tertiary" className="border border-border bg-surface-2">
              View All
            </Button>
          </div>
          <div className="space-y-3 mt-4">
            {expiringMemberships.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-2/60 transition-colors text-xs"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-8 w-8 rounded-full object-cover shrink-0"
                  />
                  <div className="truncate">
                    <p className="font-bold text-heading truncate">{member.name}</p>
                    <div className="flex items-center gap-1.5 text-[10px] text-faint">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block"></span>
                      <span>{member.plan}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="text-right">
                    <p className="text-[11px] text-quaternary font-medium">
                      {member.expiryDate}
                    </p>
                    <span className="inline-block text-[10px] font-semibold text-amber-400">
                      {member.daysLeft} days left
                    </span>
                  </div>
                  <button
                    aria-label="Actions"
                    className="p-1 text-faint hover:text-heading rounded-md hover:bg-surface-3 transition-colors cursor-pointer"
                  >
                    <MoreVertical size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Recent Payments */}
        <article className="rounded-sm border border-border bg-secondary flex flex-col justify-between p-4">
          <div className="flex items-center justify-between border-b border-border/40 pb-4">
            <h4 className="text-base text-heading">
              Recent Payments
            </h4>
            <Button variant="tertiary" className="border border-border bg-surface-2">
              View All
            </Button>
          </div>
          <div className="space-y-3 mt-4">
            {recentPayments.map((pmt) => (
              <div
                key={pmt.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-2/60 transition-colors text-xs"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="truncate">
                    <p className="font-bold text-heading truncate">{pmt.name}</p>
                    <p className="text-[10px] font-medium text-faint">{pmt.plan}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <p className="font-bold text-heading tabular-nums">{pmt.amount}</p>
                    <p className="text-[10px] text-faint">{pmt.date}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                    {pmt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Popular Classes */}
        <article className="rounded-sm border border-border bg-secondary flex flex-col justify-between p-4">
          <div className="flex items-center justify-between border-b border-border/40 pb-4">
            <h4 className="text-base text-heading">
              Popular Classes
            </h4>
            <Button variant="tertiary" className="border border-border bg-surface-2">
              View All
            </Button>
          </div>
          <div className="space-y-3 mt-4">
            {popularClasses.map((cls) => {
              const IconComponent = cls.icon;
              const percent = Math.round((cls.enrolled / cls.capacity) * 100);
              return (
                <div
                  key={cls.id}
                  className="p-2 rounded-lg hover:bg-surface-2/60 transition-colors text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${cls.iconBg}`}
                      >
                        <IconComponent size={16} />
                      </div>
                      <div>
                        <p className="font-bold text-heading">{cls.title}</p>
                        <p className="text-[10px] font-medium text-faint">
                          {cls.schedule}
                        </p>
                      </div>
                    </div>
                    <span className="font-semibold text-heading tabular-nums">
                      {cls.enrolled} / {cls.capacity}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1.5 w-full rounded-full bg-surface-3 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
};

export default HomePage;