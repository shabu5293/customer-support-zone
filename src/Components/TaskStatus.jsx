import Container from "./Container";
import ProgressCard from "./ProgressCard";
import ResolveCard from "./ResolveCard";

const TaskStatus = ({ csTickets, resolve, handleResolve, handleComplete }) => {
  return (
    <Container>
      <h2 className="font-semibold p-2 text-xl sm:text-2xl py-4">Task Status</h2>
      {csTickets.length > 0 ? (
        <div className="shadow space-y-3 sm:space-y-5 mb-8">
          {csTickets.map((tsTickets, index) => (
            <ProgressCard
              key={index}
              tsTickets={tsTickets}
              handleResolve={handleResolve}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-base sm:text-lg mb-6">
          Select a ticket to add to Task Status
        </p>
      )}

      <h2 className="font-semibold p-2 text-xl sm:text-2xl py-4">Resolved Task</h2>
      {resolve.length > 0 ? (
        <div className="shadow space-y-3 sm:space-y-5">
          {resolve.map((resCard, index) => (
            <ResolveCard key={index}
            tsTickets={resCard}
            handleResolve={() => handleComplete(resCard)} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-base sm:text-lg mb-6">No resolved tasks yet.</p>
      )}
    </Container>
  );
};

export default TaskStatus;