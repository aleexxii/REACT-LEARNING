import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  const style = "bg-lime-400 border-2 rounded p-2";
  return (
    <div className="h-16 bg-orange-300 flex justify-between p-4 gap-3">
      <Link to="/accordian" className="font-semibold font-mono">
        <span className={style}> Accordian </span>
      </Link>
      <Link to="/parent1" className="font-semibold font-mono">
        <span className={style}>parent1 </span>
      </Link>
      <Link to="/parent2" className="font-semibold font-mono">
        {" "}
        <span className={style}> Parent2 </span>
      </Link>
      <Link to="/heading" className="font-semibold font-mono">
        <span className={style}> Heading </span>
      </Link>
      <Link to="/paragraph" className="font-semibold font-mono">
        {" "}
        <span className={style}> Paragraph </span>
      </Link>
    </div>
  );
};

export default FrontPage;
