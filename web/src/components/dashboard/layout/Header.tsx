import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../store/hook";
import { toggleSidebar } from "../../../store/features/sidebar/sidebarSlice";
import { Button, Input } from "../ui";
import {
  Search,
  Bell,
  Mail,
  ChevronDown,
  Menu,
  User,
  Settings as SettingsIcon,
  LogOut,
  HelpCircle,
} from "lucide-react";

export const Header: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const dispatch = useAppDispatch();

  return (
    <header className="sticky top-0 bg-secondary/80 backdrop-blur-md z-30">
      <div className="flex h-15 items-center justify-between border-b border-border px-4 gap-4">
        <div className="flex items-center gap-2.5">
          <Button
            aria-label="Toggle Notification Menu"
            variant="icon"
            size="fit"
            onClick={() => dispatch(toggleSidebar())}
          >
            <Menu size={16} />
          </Button>
          <h2>
            Dashboard
          </h2>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-quaternary"
            />
            <Input type="text" id="search" placeholder="Search members, plans, payments..." classes="pl-10!" />
          </div>
        </div>

        {/* Right Actions: Notifications, User Profile */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button
            aria-label="Notifications"
            variant="icon"
            size="fit"
            className="relative"
          >
            <Bell size={16} />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-sm">
              6
            </span>
          </Button>

          {/* Messages */}
          <Button
            aria-label="Mails"
            variant="icon"
            size="fit"
          >
            <Mail size={16} />
          </Button>

          <div className="h-6 w-px bg-border/60 mx-0.5 hidden sm:block"></div>

          {/* Profile User Dropdown */}
          <div className="relative">
            <Button
              variant="tertiary"
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="John Doe"
                className="h-8 w-8 rounded-full object-cover ring-2 ring-primary/40 group-hover:ring-primary transition-all"
              />
              <div className="hidden xl:block text-left">
                <h5 className="text-xs font-bold text-heading">John Doe</h5>
                <p className="text-xs font-medium text-faint">Admin</p>
              </div>
              <ChevronDown size={14} className="text-quaternary group-hover:text-heading transition-colors hidden xl:block" />
            </Button>

            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 z-50 w-56 rounded-sm border border-border bg-surface-2 p-2 shadow-2xl">
                <div className="px-3 py-2 border-b border-border/60 mb-1">
                  <p className="text-xs font-bold text-heading">John Doe</p>
                  <p className="text-xs text-faint">admin@fitzone.com</p>
                </div>
                <div className="space-y-0.5">
                  <Button
                    variant="tertiary"
                    className="w-full"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <User size={16} className="text-quaternary" />
                    <span>My Profile</span>
                  </Button>
                  <Button
                    variant="tertiary"
                    className="w-full"
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate("/dashboard/settings");
                    }}
                  >
                    <SettingsIcon size={16} className="text-quaternary" />
                    <span>Account Settings</span>
                  </Button>
                  <Button
                    variant="tertiary"
                    className="w-full"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <HelpCircle size={16} className="text-quaternary" />
                    <span>Help & Support</span>
                  </Button>
                </div>
                <div className="border-t border-border/60 mt-1 pt-1">
                  <Button
                    variant="danger"
                    className="w-full py-2!"
                    size="xs"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
