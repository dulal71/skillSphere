import Link from "next/link";


const NotFound = () => {
    return (
            <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-green-900">404</h1>
      <p className="text-xl mt-4 text-gray-600">
        Oops! Page Not Found
      </p>

      <p className="text-gray-500 mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-green-900 text-white rounded-md 
        transition-all duration-300 hover:bg-green-800 hover:scale-105"
      >
        Go Home
      </Link>
    </div>
    );
};

export default NotFound;