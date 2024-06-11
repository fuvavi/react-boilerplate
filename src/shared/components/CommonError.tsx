const CommonError = () => {
  const reload = () => {
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold text-red-600 mb-3">
        Something went wrong!
      </h1>
      <button
        onClick={reload}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Reload
      </button>
    </div>
  );
};

export default CommonError;
