import { createContext, useState } from "react";

export const apiDataContext = createContext();

function Context({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null)

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );

        if(!response.ok) throw new Error ("Network response was not ok")

        const result = await response.json();
        setData(result)
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
      refetch : fetchData
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
