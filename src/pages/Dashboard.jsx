export default function Dashboard() {
  return (
    <div className="ml-64 p-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Dashboard Overview
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Total Users
              </p>
              <h2 className="text-2xl font-bold mt-1 text-blue-600">1,204</h2>
            </div>
            <span className="text-3xl">👥</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Orders Today
              </p>
              <h2 className="text-2xl font-bold mt-1 text-blue-600">342</h2>
            </div>
            <span className="text-3xl">🛒</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Revenue
              </p>
              <h2 className="text-2xl font-bold mt-1 text-blue-600">$12,540</h2>
            </div>
            <span className="text-3xl">💰</span>
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
          Sales Chart
        </h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          📈 Chart will be integrated here
        </div>
      </div>
    </div>
  );
}

