import { Suspense } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TicketManagement from "./Components/TicketManagement";
import LoadingSpinner from "./Components/LoadingSpinner";
import { ToastContainer } from "react-toastify";

const loadIssueTicket = async () => {
  const res = await fetch("/ticketData.json");
  return res.json();
};

function App() {
  const ticketPromise = loadIssueTicket();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<LoadingSpinner />}>
        <TicketManagement ticketPromise={ticketPromise} />
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
