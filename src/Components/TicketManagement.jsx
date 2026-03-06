import { use, useState } from "react";
import Container from "./Container";
import CountBox from "./CountBox";
import TicketCards from "./TicketCards";
import { toast } from "react-toastify";

const TicketManagement = ({ ticketPromise }) => {
  const data = use(ticketPromise);

  const [ticket, setTicket] = useState(data);
  const [csTickets, setCsTickets] = useState([]);
  const [resolve, setResolve] = useState([]);

  // Handle Tickets------------------------------------
  const handleCsTickets = (tickets) => {
    const reTickets = csTickets.find((item) => item.id === tickets.id);

    reTickets
      ? toast.error("⚠️ Ticket is already in progress!")
      : toast.success("Ticket moved to In Progress!");

    if (!reTickets) {
      const newCsTickets = [...csTickets, tickets];
      setCsTickets(newCsTickets);
    }
  };

  // Handle Resolved------------------------------------
  const handleResolve = (tickets) => {
    const resolveItems = [...resolve, tickets];
    setResolve(resolveItems);

    const restData = csTickets.filter((item) => item.id !== tickets.id);
    setCsTickets(restData);

    toast.success("Moved to Resolve Successfully");

    const remaining = ticket.filter((item) => item.id !== tickets.id);
    setTicket(remaining);
  };

  // Handle Complete------------------------------------
  const handleComplete = (tickets) => {
    const remainingResolve = resolve.filter((item) => item.id !== tickets.id);
    setResolve(remainingResolve);

    toast.success("Ticket completed and Resolved Successfully!");
  };

  return (
    <div>
      <Container>
        <CountBox
          csTickets={csTickets.length}
          resolveTotal={resolve.length}
        ></CountBox>
        <TicketCards
          ticket={ticket}
          handleCsTickets={handleCsTickets}
          resolve={resolve}
          handleResolve={handleResolve}
          handleComplete={handleComplete}
          csTickets={csTickets}
        ></TicketCards>
      </Container>
    </div>
  );
};

export default TicketManagement;