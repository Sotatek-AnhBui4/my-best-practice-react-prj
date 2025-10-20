import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b bg-white shadow">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-blue-600">
            My App
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/profile" className="hover:text-blue-600">
              Profile
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/auth/signin"
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
