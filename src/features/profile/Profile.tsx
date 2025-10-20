const Profile = () => {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">User Profile</h1>
      <div className="rounded-lg border bg-white p-6 shadow">
        <div className="mb-6 flex items-center space-x-4">
          <div className="h-20 w-20 rounded-full bg-gray-300"></div>
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">admin@example.com</p>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input type="text" defaultValue="John Doe" className="mt-1 w-full rounded border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              defaultValue="admin@example.com"
              className="mt-1 w-full rounded border p-2"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
