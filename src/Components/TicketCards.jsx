// import { use } from "react";
import Container from "./Container";
import IssueCard from "./IssueCard";
import TaskStatus from "./TaskStatus";

const TicketCards = ({ ticket, handleCsTickets, csTickets, resolve, handleResolve, handleComplete }) => {
  // const ticket = use(ticketPromise);
  
  return (
    <div>
      <Container>
        <section className="py-10 grid grid-cols-1 md:grid-cols-12 gap-5 mx-2">
          
          {/* Customer Tickets Card */}
          <div className="col-span-8 md:order-1 order-2">
            <h2 className="font-bold text-3xl py-4">Customer Tickets</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {ticket.map((tickets, index) => (
                <IssueCard
                  key={index}
                  tickets={tickets}
                  handleCsTickets={handleCsTickets}
                />
              ))}
            </div>
          </div>

          {/* Task Status Aside */}
          <div className="col-span-4 md:order-2 order-1">
            <TaskStatus
              csTickets={csTickets}
              resolve={resolve}
              handleResolve={handleResolve}
              handleComplete={handleComplete}
            />
          </div>

        </section>
      </Container>
    </div>
  );
};

export default TicketCards;