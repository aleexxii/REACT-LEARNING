import { Link } from "react-router-dom";
import ThemeBtn from "../themeButton/ThemeBtn";
import { apiDataContext } from "../accordian/AccordianContext";
import { useContext } from "react";

const Navbar = () => {
  
  const style = "bg-lime-400 border-2 rounded p-2 font-semibold font-mono";
  const { refetch } = useContext(apiDataContext);

  const handleGetFetch = async () => {
    await refetch();
  };

  return (
    <div className="h-16 bg-orange-300 flex justify-between p-4 gap-3">
      {/* Best way to do using Navigate hook insted of Link bcz Link doesnt allow asynchronous opereations */}
      <Link to="/accordian">
        <button onClick={handleGetFetch} className={style}>
          Accordian
        </button>
      </Link>
      <Link to="/parent1">
        <button className={style}>parent1 </button>
      </Link>
      <Link to="/parent2">
        <button className={style}> Parent2 </button>
      </Link>
      <Link to="/heading">
        <button className={style}> Heading </button>
      </Link>
      <Link to="/paragraph">
        <button className={style}> Paragraph </button>
      </Link>
      <ThemeBtn />
    </div>
  );
};

export default Navbar;
