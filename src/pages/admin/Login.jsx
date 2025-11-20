import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call your backend login API here
    // Example:
    // const response = await api.post("/auth/login", { email, password });
    // localStorage.setItem("token", response.data.token);

    // For now, just redirect to dashboard
    localStorage.setItem("token", "dummy-token");
    navigate("/admin/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          © 2025 Your Company
        </p>
      </div>
    </div>
  );
  
}
