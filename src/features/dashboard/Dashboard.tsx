const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold text-gray-700">Products</h3>
          <p className="text-3xl font-bold text-green-600">567</p>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold text-gray-700">Revenue</h3>
          <p className="text-3xl font-bold text-purple-600">$89,234</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
