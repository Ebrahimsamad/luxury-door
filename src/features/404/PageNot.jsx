import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center text-black">
      <div className="text-center p-8 bg-gray-100 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
        <p className="text-xl text-secondary mb-6">Page Not Found</p>
        <p className="text-lg mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-primary text-white py-3 px-6 rounded-full text-lg transition-all duration-200 hover:bg-secondary"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
