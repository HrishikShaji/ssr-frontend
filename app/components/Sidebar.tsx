"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Settings,
  UserCircle,
  LogIn,
  UserPlus,
  Home,
  Bell,
} from "lucide-react";
import clsx from "clsx";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const menuItems = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { icon: <Bell size={20} />, label: "Notifications" },
    { icon: <UserCircle size={20} />, label: "Profile" },
  ];

  return (
    <aside
      className={clsx(
        "h-screen bg-gray-900 text-white transition-all duration-300 flex-shrink-0 flex flex-col",
        isOpen ? "w-64" : "w-16"
      )}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-800">
        <button
          className="text-white hover:bg-gray-800 p-2 rounded-lg transition-colors w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 py-4 overflow-x-hidden">
        <ul className="space-y-2 px-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className="w-full hover:bg-gray-700 p-2 rounded-lg transition-colors flex items-center whitespace-nowrap"
              >
                <span className="flex items-center min-w-[2rem] justify-center">
                  {item.icon}
                </span>
                {isOpen && <span className="ml-3 text-sm">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Auth Links */}
      <div className="border-t border-gray-800 p-2">
        <div className="space-y-2">
          <button
            className="w-full hover:bg-gray-700 p-2 rounded-lg transition-colors flex items-center whitespace-nowrap"
          >
            <span className="flex items-center min-w-[2rem] justify-center">
              <LogIn size={20} />
            </span>
            {isOpen && <span className="ml-3 text-sm">Login</span>}
          </button>
          <button
            className="w-full hover:bg-gray-700 p-2 rounded-lg transition-colors flex items-center whitespace-nowrap"
          >
            <span className="flex items-center min-w-[2rem] justify-center">
              <UserPlus size={20} />
            </span>
            {isOpen && <span className="ml-3 text-sm">Sign Up</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
