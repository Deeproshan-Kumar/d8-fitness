import React from "react";
import { NavLink, useNavigate } from "react-router";
import { useAppSelector } from "../../../store/hook";
import { navLinks } from "../../../constants/dashboard";
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
    <aside className={`flex h-screen flex-col border-r border-border bg-secondary shrink-0 transition-all
    duration-300
    ease-in-out ${isOpen ? "w-64" : "w-16"}`}>
      <div className={`h-15 w-full flex items-center gap-2.5 border-b border-border ${isOpen ? "px-4" : "justify-center"}`}>
        <div className="h-8 w-8 min-w-8 center rounded-sm bg-primary-soft text-primary border border-primary/30">
          <Dumbbell size={20} className="rotate-45" />
        </div>
        {/* Collapsed: hidden from sight but still announced, so the rail keeps its heading. */}
        <div className={`flex flex-col items-start ${isOpen ? "" : "sr-only"}`}>
          <h2 className="text-sm font-bold">
            TZ
          </h2>
          <p className="text-xs text-primary font-medium text-nowrap">
            Transformation Zone
          </p>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-4 space-y-2 scrollbar-thin">
        {navLinks.map(({ name, path, icon: Icon, badge }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/dashboard"}
            title={isOpen ? undefined : name}
            className={({ isActive }) =>
              `group relative center-y text-xs font-medium text-nowrap rounded-sm py-2.5 transition-all duration-200 ${isOpen ? "justify-between px-2" : "justify-center"} ${isActive
                ? "bg-primary text-on-primary font-semibold"
                : "text-quaternary hover:bg-surface-2 hover:text-heading"
              }`
            }
          >
            <div className={`center-y ${isOpen ? "gap-3" : ""}`}>
              <Icon size={16} className="min-w-4" />
              {/* sr-only keeps the link's accessible name once the label is out of sight. */}
              <span className={isOpen ? "" : "sr-only"}>{name}</span>
            </div>
            {badge && (isOpen ? (
              <span className="h-5 min-w-5 center rounded-full bg-primary/80 px-1.5 text-xs font-bold text-on-primary">
                {badge}
              </span>
            ) : (
              /* No room for the count in a 64px rail, so it degrades to a dot. */
              <span
                aria-hidden="true"
                className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary"
              />
            ))}
          </NavLink>
        ))}
      </nav>

      {/* Sidebar Footer: Clean Logout Button */}
      <button
        onClick={handleLogout}
        title={isOpen ? undefined : "Log Out"}
        className={`h-15 w-full center-y gap-2.5 p-2 text-xs font-medium text-quaternary border-t border-border/50 hover:bg-rose-500/10 hover:text-rose-400 transition-colors cursor-pointer ${isOpen ? "" : "justify-center"}`}
      >
        <LogOut size={16} className="min-w-4" />
        <span className={isOpen ? "" : "sr-only"}>Log Out</span>
      </button>
    </aside>
  );
};

export default Sidebar;
