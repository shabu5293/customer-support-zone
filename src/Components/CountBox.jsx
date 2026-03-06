import Container from "./Container";
import vector1 from "../assets/vector1.png";

const CountBox = ({csTickets, resolveTotal}) => {
  return (
    <Container>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 my-8 mx-2">
        <div className="relative rounded-md h-[250px] overflow-hidden bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          {/* Left image */}
          <div
            className="absolute left-0 top-0 h-full w-1/2 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url(${vector1})` }}
          ></div>
          {/* Right image (reversed) */}
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-center opacity-80 transform -scale-x-100"
            style={{ backgroundImage: `url(${vector1})` }}
          ></div>

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h2 className="font-bold text-4xl pb-4">In-Progress</h2>
            <p className="font-semibold text-3xl">{csTickets}</p>
          </div>
        </div>

        <div className="relative rounded-md h-[250px] overflow-hidden bg-gradient-to-r from-[#54CF68] to-[#00827A]">
          {/* Left image */}
          <div
            className="absolute left-0 top-0 h-full w-1/2 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url(${vector1})` }}
          ></div>
          {/* Right image (reversed) */}
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-center opacity-80 transform -scale-x-100"
            style={{ backgroundImage: `url(${vector1})` }}
          ></div>

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h2 className="font-bold text-4xl pb-4">Resolved</h2>
            <p className="font-semibold text-3xl">{resolveTotal}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
