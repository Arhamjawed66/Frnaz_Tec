import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  FaHome,
  FaStore,
  FaTruck,
  FaBox,
  FaChevronDown,
  FaChevronRight,
  FaBars,
  FaTimes,
  FaListAlt,
  FaCartPlus,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import Header from "./Navbar";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const { darkMode } = useTheme();

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  // ✅ Reusable Nav Item
  const NavItem = ({ to, icon, label }) => (
    <div className="relative group">
      <Link
        to={to}
        onClick={handleLinkClick}
        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
          location.pathname === to
            ? darkMode
              ? "bg-gray-800 text-white"
              : "bg-blue-700 text-white"
            : darkMode
            ? "hover:bg-gray-800 text-gray-200"
            : "hover:bg-blue-500/70 text-white"
        }`}
      >
        <span className="text-lg">{icon}</span>
        {isSidebarOpen && <span className="text-sm font-medium">{label}</span>}
      </Link>

      {/* Tooltip Show Only When Sidebar Closed */}
      {!isSidebarOpen && (
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition">
          {label}
        </span>
      )}
    </div>
  );

  // ✅ Dropdown Nav Item Component
  const Dropdown = ({ icon, label, menuKey, links }) => (
    <div>
      <button
        onClick={() => toggleDropdown(menuKey)}
        className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all duration-200 ${
          darkMode ? "hover:bg-gray-800" : "hover:bg-blue-500/70"
        }`}
      >
        <span className="flex items-center gap-3">
          <span className="text-lg">{icon}</span>
          {isSidebarOpen && <span className="text-sm font-medium">{label}</span>}
        </span>

        {isSidebarOpen &&
          (openDropdown === menuKey ? (
            <FaChevronDown className="text-xs" />
          ) : (
            <FaChevronRight className="text-xs" />
          ))}
      </button>

      {isSidebarOpen && openDropdown === menuKey && (
        <div className="ml-9 mt-1 space-y-1 animate-fadeIn">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={handleLinkClick}
              className="block text-sm rounded-md px-3 py-1.5 hover:bg-white/20 transition"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
      {/* ✅ Header Component */}
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex flex-1 pt-16 relative overflow-hidden">
        {/* ✅ Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 shadow-lg transition-all duration-300 ease-in-out
          ${darkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"}
          ${isSidebarOpen ? "w-64" : "w-16"}
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          md:relative md:translate-x-0 md:flex-shrink-0`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 flex-shrink-0">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center justify-center gap-2 hover:bg-white/20 px-2 py-2 rounded transition"
            >
              {isSidebarOpen ? (
                <>
                  <FaTimes className="text-lg" />
                  <span className="hidden md:inline text-sm font-medium">Hide</span>
                </>
              ) : (
                <FaBars className="text-lg" />
              )}
            </button>
          </div>

          {/* ✅ Nav section with scroll logic */}
          <nav
            className={`flex-1 px-2 py-4 space-y-2 transition-all duration-300 ${
              isSidebarOpen ? "overflow-y-auto" : "overflow-hidden"
            }`}
          >
            <NavItem to="/dashboard" icon={<FaHome />} label="Dashboard" />

            <Dropdown
              icon={<FaStore />}
              label="Store"
              menuKey="store"
              links={[
                { to: "/store/create", label: " name" },
                { to: "/store/update", label: "group" },
                { to: "/store/notification", label: "Notification" },
                { to: "/store/reminder", label: "Reminder" },
              ]}
            />

            <Dropdown
              icon={<FaListAlt />}
              label="Category"
              menuKey="category"
              links={[
                { to: "/category/create", label: "Create Category" },
                { to: "/category/update", label: "Update Category" },
                { to: "/category/view", label: "View Category" },
              ]}
            />

            <Dropdown
              icon={<FaBox />}
              label="Inventory"
              menuKey="products"
              links={[
                { to: "/products/create", label: "Create inventory" },
                { to: "/products/update", label: "Update inventory" },
                { to: "/product/view", label: "View invemtory" },
              ]}
            />

            <Dropdown
              icon={<FaStore />}
              label="Setting"
              menuKey="setting"
              links={[
                { to: "/setting/theme", label: "Theme" },
                { to: "/setting/users", label: "User" },
              ]}
            />

            <Dropdown
              icon={<FaTruck />}
              label="Supplier"
              menuKey="supplier"
              links={[
                { to: "/supplier/info", label: "Info" },
                { to: "/supplier/tandc", label: "T & C" },
              ]}
            />

            <Dropdown
              icon={<FaCreditCard />}
              label="Payments"
              menuKey="payments"
              links={[
                { to: "/payment/add", label: "Add" },
                { to: "/payment/modify", label: "Modify" },
              ]}
            />

            <Dropdown
              icon={<FaHeadset />}
              label="Customer Care"
              menuKey="customer care"
              links={[
                { to: "/customer_care/call", label: "Call" },
                { to: "/customer_care/email", label: "Email" },
                { to: "/customer_care/whatsapp", label: "WhatsApp" },
              ]}
            />

            <NavItem to="/orders" icon={<FaCartPlus />} label="Orders" />
          </nav>
        </aside>

        {/* Overlay for Mobile (when sidebar open) */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* ✅ Main Content */}
        <main
          className={`flex-1 h-[calc(100vh-4rem)] overflow-y-auto p-4 sm:p-6 md:p-8 transition-all duration-300`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
