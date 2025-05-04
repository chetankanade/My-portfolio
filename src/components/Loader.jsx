
const Loader = () => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="flex space-x-2">
          <div className="w-4 h-16 bg-yellow-500 animate-[bounce_1s_infinite_0.1s]"></div>
          <div className="w-4 h-16 bg-yellow-400 animate-[bounce_1s_infinite_0.2s]"></div>
          <div className="w-4 h-16 bg-portfolio-accent animate-[bounce_1s_infinite_0.3s]"></div>
        </div>
        <p className="mt-4 text-portfolio-gray-mid font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
