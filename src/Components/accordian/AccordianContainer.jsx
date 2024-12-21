import { Link } from "react-router-dom";
import AccordianName from "./AccordianName";
import { apiDataContext } from "./AccordianContext";
import { useContext } from "react";

function AccordianContainer() {

  const data = useContext(apiDataContext)

  console.log("Data in container:", data);

  return (
     <div>
      {data.map((item) => (
        <AccordianName key={item.id} values={item} />
      ))}
    </div>
  );
}

export default AccordianContainer;
