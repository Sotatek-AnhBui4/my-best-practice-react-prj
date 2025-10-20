import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-gray-300">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="mb-8 text-gray-600">
          Sorry, the page you are looking for does not exist or has been removed.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded bg-gray-600 px-6 py-3 text-white hover:bg-gray-700"
          >
            Go Back
          </button>
          <Link to="/" className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
