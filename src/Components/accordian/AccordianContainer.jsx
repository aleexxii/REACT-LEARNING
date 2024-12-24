import AccordianName from "./AccordianName";
import { apiDataContext } from "./AccordianContext";
import { useContext } from "react";

function AccordianContainer() {
  const {data, isLoading } = useContext(apiDataContext);

  if(isLoading){
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      {data?.map((item) => (
        <AccordianName key={item.id} values={item} />
      ))}
    </div>
  );
}

export default AccordianContainer;
