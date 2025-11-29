import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Admin Pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import NewsletterAdmin from "./pages/admin/Newsletter";
import Content from "./pages/admin/Content";

// Routes
import AdminRoutes from "./routes/AdminRoutes";
import CustomerRoutes from "./routes/CustomerRoutes";




export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public admin route 
        <Route path="/admin/login" element={<Login />} />

        {/* Protected admin routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/newsletter" element={<NewsletterAdmin />} />
          <Route path="/admin/content" element={<Content />} />
        </Route>

        {/* Customer routes */}
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </Router>
  );
}
