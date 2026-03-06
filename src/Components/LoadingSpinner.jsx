const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-16 h-16 animate-spin rounded-full border-4 border-t-blue-500 border-b-purple-500 border-l-pink-500 border-r-green-500"></div>
    </div>
  );
};

export default LoadingSpinner;