export const SimpleSkeleton = () => {
  return (
    <div className="flex flex-col animate__animated animate__fadeIn animate-pulse">
      <h3 className="h-4 bg-gray-200 rounded-md dark:bg-gray-700" style={{ width: '40%' }}></h3>

      <ul className="mt-5 space-y-3">
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
      </ul>
    </div>
  );
};
