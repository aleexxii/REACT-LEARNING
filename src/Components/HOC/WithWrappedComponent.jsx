import { useState } from "react";

const  WithWrappedComponent = WrappComponent => {
  return () => {
    const [isHover, SetHover] = useState(false);

    function handleMouseEnter() {
      SetHover(true);
    }
    function handleMouseLeave() {
      SetHover(false);
    }
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          isHover ? { backgroundColor: "red" } : { backgroundColor: "gray" }
        }
      >
        <WrappComponent />
      </div>
    );
  };
}

export default WithWrappedComponent;
