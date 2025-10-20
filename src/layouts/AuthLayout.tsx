import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/">
            <h1 className="text-3xl font-bold text-gray-900">My App</h1>
          </Link>
          <p className="mt-2 text-gray-600">Enterprise React Application</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
