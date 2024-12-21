import { createContext, useEffect, useState } from "react";
import AccordianName from "./AccordianName";

export const apiDataContext = createContext();

function Context({children}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => console.log("Fetching Error : ", err));
  }, []);
  return (
    <div>
      <apiDataContext.Provider value={data}>
        {children}
      </apiDataContext.Provider>
    </div>
  );
}

export default Context;
