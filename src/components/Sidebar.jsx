import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaStore, FaChevronDown, FaChevronRight, FaTruck, FaBox, FaUtensils } from "react-icons/fa";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [storeOpen, setStoreOpen] = useState(false);
  const location = useLocation();

  // classes
  const base = isOpen ? "w-64" : "w-20";
  const itemText = isOpen ? "ml-3" : "sr-only";

  const navItem = (to, icon, label) => (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-md transition ${location.pathname === to ? "font-semibold" : "font-normal"} hover:text-black`}
    >
      <span className="text-lg">{icon}</span>
      <span className={itemText}>{label}</span>
    </Link>
  );

  return (
    <aside
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] ${base} bg-pink-600 text-white p-4 transition-all duration-300 z-40`}
      aria-expanded={isOpen}
    >
      {/* Header area inside sidebar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center font-bold">F</div>
          {isOpen && <div><div className="text-lg font-bold">FRANZ FOOD</div><div className="text-xs text-white/80">Manage</div></div>}
        </div>

        {/* small collapse icon on sidebar */}
        <button
          onClick={() => setIsOpen((s) => !s)}
          className="p-1 rounded hover:bg-white/10"
          aria-label="Toggle sidebar"
        >
          {isOpen ? <FaChevronLeftIcon /> : <FaChevronRightIcon />}
        </button>
      </div>

      {/* Menu */}
      <nav className="space-y-1">
        {navItem("/dashboard", <FaHome />, "Dashboard")}

        {/* Store with push-down submenu */}
        <div>
          <button
            onClick={() => setStoreOpen((s) => !s)}
            onMouseEnter={() => setStoreOpen(true)}
            onMouseLeave={() => setStoreOpen(false)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:text-black transition"
          >
            <span className="flex items-center gap-3">
              <FaStore />
              <span className={itemText}>Store</span>
            </span>
            {isOpen && (storeOpen ? <FaChevronDown /> : <FaChevronRight />)}
          </button>

          {/* push-down area */}
          <div
            className={`overflow-hidden transition-all duration-300 ${storeOpen ? "max-h-40" : "max-h-0"}`}
            onMouseEnter={() => setStoreOpen(true)}
            onMouseLeave={() => setStoreOpen(false)}
          >
            <Link to="/store/create" className="block pl-10 py-2 hover:text-black">Create Store</Link>
            <Link to="/store/update" className="block pl-10 py-2 hover:text-black">Update Store</Link>
            <Link to="/store/view" className="block pl-10 py-2 hover:text-black">View Store</Link>
          </div>
        </div>

        {navItem("/orders", <FaTruck />, "Orders")}
        {navItem("/products", <FaBox />, "Products")}
        {navItem("/users", <FaUtensils />, "Users")}
        {navItem("/settings", <FaStore />, "Settings")}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-white/10">
        <div className="flex items-center gap-3">
         
        </div>
      </div>
    </aside>
  );
}

/* small helper icons (so we don't import more libs) */
function FaChevronLeftIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6"></path>
    </svg>
  );
}
function FaChevronRightIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6"></path>
    </svg>
  );
}
