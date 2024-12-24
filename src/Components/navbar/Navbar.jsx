import { Link, useNavigate } from "react-router-dom";
import ThemeBtn from "../themeButton/ThemeBtn";
import { apiDataContext } from "../accordian/AccordianContext";
import { useContext } from "react";

const Navbar = () => {
  
  const navigate = useNavigate();
  const style = "bg-lime-400 border-2 rounded p-2 font-semibold font-mono";
  const { refetch } = useContext(apiDataContext);

  // const handleGetFetch = async () => {
  //   await refetch();
  //   /* Link is not suppported asynchronous operations so we need to use Navigate */
  //   navigate("/accordian");
  // };

  return (
    <div className="h-16 bg-orange-300 flex justify-between p-4 gap-3">
      <Link to='/accordian'>
      <button  className={style}>
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
