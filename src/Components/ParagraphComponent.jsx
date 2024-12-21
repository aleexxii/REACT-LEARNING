import WithWrappedComponent from "./HOC/WithWrappedComponent";

function Paragraph() {
  return (
    <p>
      A Higher-Order Component (HOC) in React is a function that takes a
      component as an argument and returns a new component with enhanced
      functionality. HOCs are a powerful feature that allows you to reuse
      component logic across multiple components without modifying their code
    </p>
  );
}

export default Paragraph;

export const WrappedParagraph = WithWrappedComponent(Paragraph);
