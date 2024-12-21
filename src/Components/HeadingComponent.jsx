import WithWrappedComponent from "./HOC/WithWrappedComponent";

function Heading() {
  return (
    <h1> Learning Higher Order Component </h1>
  );
}

export default Heading;

export const WrappedHeading = WithWrappedComponent(Heading)