import { useState } from "react";

const AccordianName = ({ values }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(!isOpen);
    };

    if (!values) {
        return <div>Loading...</div>;
    }

  return (
    <div className="mt-3">
            <div onClick={openHandler} className="cursor-pointer">
                <h2 className="border-2 border-white rounded-md w-6/12">
                    {values.email} 
                </h2>
            </div>

            {isOpen && (
                <div className="w-6/12 border-2 border-l-white border-r-white border-b-white border-t-0 rounded">
                    <p>{values.body}</p>
                </div>
            )}
        </div>
  );
};

export default AccordianName;
