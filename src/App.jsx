import { Routes, Route, Navigate } from "react-router-dom";

/* 🌙 Context */
import { ThemeProvider } from "./contexts/ThemeContext";

/* 📄 Pages */
import Dashboard from "./pages/Dashboard";
import CreateStore from "./pages/store/CreateStore";
import UpdateStore from "./pages/store/UpdateStore";
import ViewStore from "./pages/store/ViewStore";
import Orders from "./pages/Orders";
import LoginFrom from "./pages/auth/login";
import RegisterFrom from "./pages/auth/register";
import Product from "./pages/product/ViewProducts";
import Update_Category from "./pages/category/update_catagory";
import Create_Category from "./pages/category/Create_Category";
import View_Category from "./pages/category/View_Category";


/* 🧩 Components */
import Layout from "./components/Layout"; // ✅ Sidebar + Header + Outlet layout
import Notification from "./pages/store/notification";
import Reminder from "./pages/store/Reminder";
import Theme from "./pages/setting/Theme";
import User from "./pages/setting/Users";
import Info from "./pages/supplier/info";
import TandC from "./pages/supplier/tandc";
import Add from "./pages/payment/add";
import Modify from "./pages/payment/modify";
import Call from "./pages/customer_care/Call";
import Email from "./pages/customer_care/Email";
import WhatUp from "./pages/customer_care/WhatsApp";


/* 🔒 Protected Route */
function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.role === "admin" ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <ThemeProvider>
      {/* 🌍 Public Routes (Login / Register) */}
      {!user && (
        <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
          <Routes>
            <Route path="/login" element={<LoginFrom />} />
            <Route path="/register" element={<RegisterFrom />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </main>
      )}

      {/* 🔐 Protected Routes (Admin Layout) */}
      {user?.role === "admin" && (
        <Routes>
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />

            {/* { Store Routes} */}
            <Route path="/store/create" element={<CreateStore />} />
            <Route path="/store/update" element={<UpdateStore />} />
            <Route path="/store/view" element={<ViewStore />} />
            <Route path="/store/reminder" element={ <Reminder />} />
            <Route path="/store/notification" element={<Notification/>} />


            <Route path="/category/update" element={<Update_Category />} />
            <Route path="/category/create" element={<Create_Category />} />
            <Route path="/category/view" element={<View_Category />} />


            <Route path="/product/view" element={<Product/>} />

            <Route path="/supplier/info" element={<Info />} />
            <Route path="/supplier/tandc" element={<TandC />} />

            <Route path="/payment/add" element={<Add />} />
            <Route path="/payment/modify" element={<Modify />} />

            <Route path="/customer_care/call" element={<Call />} />
            <Route path="/customer_care/email" element={<Email />} />
            <Route path="/customer_care/whatsapp" element={<WhatUp />} />


            <Route path="/setting/theme" element={<Theme />} />
            <Route path="/setting/users" element={<User />} />
          </Route>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route
  path="/login"
  element={user ? <Navigate to="/dashboard" replace /> : <LoginFrom />}
/>




        </Routes>

        
      )}
    </ThemeProvider>
  );
}
