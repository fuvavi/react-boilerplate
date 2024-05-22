import { useAppDispatch, useAppSelector } from '@/stores/hook';
import { loginUser } from '@/stores/user/userSlice';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  console.log('user', user);

  const handleLogin = () => {
    dispatch(loginUser({ email: 'name@domain.com', password: '1234' }));
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <h1>Login</h1>
      <p>email: {user?.email}</p>
      <Link to="/">Go to home page</Link>
      <button
        onClick={handleLogin}
        className="py-2 px-4 rounded-sm bg-blue text-white cursor-pointer"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
