import MessageProvider from "./MessageProvider";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  return (
    <MessageProvider>
      <Child1 />
      <Child2 />
    </MessageProvider>
  );
}

export default Parent;
