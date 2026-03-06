const ProgressCard = ({ tsTickets, handleResolve }) => {
  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-3 sm:p-4 w-full">
      {/* Title */}
      <h2 className="text-base sm:text-lg text-left font-semibold text-gray-900 mb-3 sm:mb-4 break-words">
        {tsTickets.title}
      </h2>

      {/* Button */}
      <button onClick={()=> handleResolve(tsTickets)} className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md w-full transition text-sm sm:text-base">
        Mark as Done
      </button>
    </div>
  );
};

export default ProgressCard;