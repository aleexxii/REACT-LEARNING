import { createContext, useEffect, useState } from "react";

export const apiDataContext = createContext();

function Context({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );

        if(!response.ok) throw new Error ("Network response was not ok")

        const result = await response.json();
        setData(result)
      } catch (err) {
        console.log("Error while fetching data : ", err);
      } finally {
        console.log('loading set to false');
        setLoading(false);
      }
    };

    const contextValue = {
      data,
      isLoading,
      refetch : fetchData
    }

    useEffect(() => {
      if(data.length == 0){
        fetchData()
      }
    },[data])
    

  return (
    <div>
      <apiDataContext.Provider value={contextValue}>
        {children}
      </apiDataContext.Provider>
    </div>
  );
}

export default Context;
