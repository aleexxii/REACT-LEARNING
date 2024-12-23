import WithWrappedComponent from "./HOC/WithWrappedComponent";
import ThemeBtn from "./themeButton/ThemeBtn";

function Paragraph() {
  return (
    <>
    <p>
      A Higher-Order Component (HOC) in React is a function that takes a
      component as an argument and returns a new component with enhanced
      functionality. HOCs are a powerful feature that allows you to reuse
      component logic across multiple components without modifying their code
    </p>
    <div className="mt-4 justify-items-center">
    <ThemeBtn />
    </div>
    </>
  );
}

export default Paragraph;

export const WrappedParagraph = WithWrappedComponent(Paragraph);
