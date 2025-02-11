"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const storedState = localStorage.getItem("sidebarOpen");
    if (storedState !== null) {
      setIsOpen(storedState === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarOpen", String(isOpen));
  }, [isOpen]);

  return (
    <aside
      className={clsx(
        "h-screen bg-gray-900 text-white p-4 transition-all duration-300 flex-shrink-0",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <button
        className="absolute top-4 right-4 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <>
          <h2 className="text-2xl font-bold">Sidebar</h2>
          <ul className="mt-6 space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded">Dashboard</li>
            <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
            <li className="hover:bg-gray-700 p-2 rounded">Profile</li>
          </ul>
        </>
      )}
    </aside>
  );
}
