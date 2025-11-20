import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p>Welcome to the Admin Dashboard!</p>
        </div>
      </div>
    </div>
  );
}
