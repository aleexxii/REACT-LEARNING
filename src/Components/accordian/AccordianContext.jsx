import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const apiDataContext = createContext();

function Context({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const location = useLocation()

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );

        if(!response.ok) throw new Error ("Network response was not ok")

        const result = await response.json();
        
      } catch (error) {
        console.log("Error while fetching data : ", error);
        setError(error.message)
      } finally {
        setLoading(false);
      }
    };

    const contextValue = {
      data,
      isLoading,
    }
    

  return (
    <div>
      <apiDataContext.Provider value={contextValue}>
        {children}
      </apiDataContext.Provider>
    </div>
  );
}

export default Context;
