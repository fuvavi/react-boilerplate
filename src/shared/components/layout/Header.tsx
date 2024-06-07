import { useAppSelector } from '@/stores/hook';
import Logo from '@/shared/components/Logo';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Header = ({ className }: { className?: string }) => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  return (
    <header className={twMerge('absolute inset-x-0 top-0 z-50', className)}>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Logo width={60} height={60} />
        <div className="flex items-center gap-x-12">
          <Link
            to="/admin"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Admin
          </Link>
          {!isLoading && user ? (
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={user?.image}
                alt={`${user?.firstName} ${user?.lastName}`}
              />
              <span>{`${user?.firstName} ${user?.lastName}`}</span>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
