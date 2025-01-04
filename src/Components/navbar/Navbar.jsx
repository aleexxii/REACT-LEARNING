import { Link } from "react-router-dom";
import ThemeBtn from "../themeButton/ThemeBtn";

const Navbar = () => {
  
  const style = "bg-lime-400 border-2 rounded p-2 font-semibold font-mono";

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
      <Link to='/use-memo' >
      <button className={style}> Memo Usage </button>
      </Link>
      <Link to='/react-fiber'>
      <button className={style}> React Fiber </button>
      </Link>
      <Link to='/todo' >
      <button className={style}>
        Todo
      </button>
      </Link>
      <ThemeBtn />
    </div>
  );
};

export default Navbar;
