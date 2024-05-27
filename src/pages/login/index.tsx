import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { UserLoginInterface } from '@/shared/models/User';
import { useAppDispatch, useAppSelector } from '@/stores/hook';
import { loginUser, reset } from '@/stores/user/userSlice';
import { useQueryParams } from '@/shared/hooks/useQueryParam';
import SpinnerIcon from '@/assets/icons/spinner.svg?react';
import Logo from '@/shared/components/Logo';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, error, message, success, isLoading } = useAppSelector(
    (state) => state.user,
  );
  const query = useQueryParams();
  const fromUrl = query.get('from');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginInterface>({
    defaultValues: {
      username: 'kminchelle',
      password: '0lelplR',
    },
  });

  const onSubmit: SubmitHandler<UserLoginInterface> = async (data) => {
    dispatch(reset());
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (!!success && !!user) {
      localStorage.setItem('user_id', user.id);
      toast.success(message);
      navigate(fromUrl ? fromUrl : '/');
    }
    return () => {
      dispatch(reset());
    };
  }, [success, user, navigate, dispatch, fromUrl, message]);

  useEffect(() => {
    if (!!error && !!message) {
      toast.error(message);
    }
    return () => {
      dispatch(reset());
    };
  }, [error, message, dispatch]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo className="mx-auto" width={100} height={100} />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="username"
              className="flex text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                {...register('username', { required: 'Username is required' })}
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.username ? (
                <p role="alert" className="text-left text-sm text-red-600">
                  {errors.username.message}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                {...register('password', { required: 'Password is required' })}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password ? (
                <p role="alert" className="text-left text-sm text-red-600">
                  {errors.password.message}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="flex w-full justify-center items-center rounded-md bg-indigo-500 disabled:bg-indigo-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? (
                <span className="transition ease-in-out -translate-x-2 duration-300">
                  <SpinnerIcon className="animate-spin h-5 w-5" />
                </span>
              ) : null}
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
};

export default Login;
