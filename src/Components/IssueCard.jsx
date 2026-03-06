import { Calendar } from "lucide-react";

const IssueCard = ({ tickets, handleCsTickets }) => {
  return (
    <div onClick={()=> handleCsTickets(tickets)} className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 flex flex-col gap-3 hover:shadow-md transition cursor-pointer">
      {/* Title and Status */}
      <div className="flex justify-between items-start gap-2">
        <h2 className="text-lg font-semibold text-gray-900 break-words flex-1 min-w-0">{tickets.title}</h2>
        <span
          className={`flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0
    ${
      tickets.status === "Open"
        ? "bg-green-100 text-green-700"
        : tickets.status === "In Progress"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-gray-100 text-gray-700"
    }`}
        >
          <span
            className={`h-2 w-2 rounded-full 
      ${
        tickets.status === "Open"
          ? "bg-green-500"
          : tickets.status === "In Progress"
          ? "bg-yellow-600"
          : "bg-gray-400"
      }`}
          ></span>
          {tickets.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm break-words">{tickets.description}</p>

      {/* Footer */}
      <div className="flex flex-wrap justify-between items-center gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-700">{tickets.id}</span>

          <span
            className={`font-semibold 
    ${
      tickets.priority === "High"
        ? "text-red-500"
        : tickets.priority === "Medium"
        ? "text-yellow-600"
        : tickets.priority === "Low"
        ? "text-gray-500"
        : "text-gray-400"
    }`}
          >
            {tickets.priority}
          </span>
        </div>
        <div className="flex items-center gap-2 min-w-0">
          <span className="truncate max-w-[100px]">{tickets.customer}</span>
          <Calendar size={16} className="flex-shrink-0" />
          <span className="whitespace-nowrap">{tickets.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;