import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/useAuthStore';

const MainLayout = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth/signin');
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <header className="border-b bg-white shadow">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-bold text-blue-600">
              My App
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link to="/" className="transition-colors hover:text-blue-600">
              Home
            </Link>
            <Link to="/dashboard" className="transition-colors hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/profile" className="transition-colors hover:text-blue-600">
              Profile
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-600">Hello, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth/signin"
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="min-h-[calc(100vh-8rem)]">
        <Outlet />
      </main>

      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          © 2025 My App. All rights reserved. Built with React 19 & Vite
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
