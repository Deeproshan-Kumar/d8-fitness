import React from "react";
import { NavLink, useNavigate } from "react-router";
import { useAppSelector } from "../../../store/hook";
import { navLinks } from "../../../constants/main";
import { Dumbbell, LogOut } from "lucide-react";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const isOpen = useAppSelector(
    (state) => state.sidebar.isOpen
  );

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-secondary shrink-0 transition-all
    duration-300
    ease-in-out">
      <div className="h-15 w-full flex items-center gap-2.5 border-b border-border px-4">
        <div className="flex h-8 w-8 min-w-8 items-center justify-center rounded-sm bg-primary-soft text-primary border border-primary/30">
          <Dumbbell size={20} className="rotate-45" />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-sm font-bold">
            TZ
          </h2>
          <p className="text-xs text-primary font-medium text-nowrap">
            Transformation Zone
          </p>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-2 scrollbar-thin">
        {navLinks.map(({ name, path, icon: Icon, badge }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/dashboard"}
            className={({ isActive }) =>
              `group relative flex items-center justify-between text-xs font-medium text-nowrap rounded-sm px-2 py-2.5 transition-all duration-200 ${isActive
                ? "bg-primary text-on-primary font-semibold"
                : "text-quaternary hover:bg-surface-2 hover:text-heading"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <Icon size={16} />
              <span>{name}</span>
            </div>
            {badge && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary/80 px-1.5 text-xs font-bold text-on-primary">
                {badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Sidebar Footer: Clean Logout Button */}
      <button
        onClick={handleLogout}
        className="h-15 w-full flex items-center gap-2.5 p-2 text-xs font-medium text-quaternary border-t border-border/50 hover:bg-rose-500/10 hover:text-rose-400 transition-colors cursor-pointer"
      >
        <LogOut size={16} />
        <span>Log Out</span>
      </button>
    </aside>
  );
};

export default Sidebar;