import { HomeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Admin Dashboard
        </h1>
        <Link
          to="/"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <HomeIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          Home
        </Link>
      </div>
    </div>
  );
};

export default Home;
