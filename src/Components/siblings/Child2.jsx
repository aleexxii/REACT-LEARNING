import { useContext } from "react";
import { MessageContext } from "./MessageProvider";

function Child2() {
  const { message } = useContext(MessageContext);
  return <div>{message}</div>;
}

export default Child2;
