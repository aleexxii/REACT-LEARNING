import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParentComponent from "./Components/PassingToChild";
import { WrappedHeading } from "./Components/HeadingComponent";
import { WrappedParagraph } from "./Components/ParagraphComponent";
import AccordianContainer from "./Components/accordian/AccordianContainer";
import FrontPage from "./Components/Front_Page/FrontPage";
import Context from "./Components/accordian/AccordianContext";


function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/accordian" element={<AccordianContainer />} />
            <Route path="parent1" element={<ParentComponent />} />
            <Route path="heading" element={<WrappedHeading />} />
            <Route path="parent1" element={<ParentComponent />} />
            <Route path="paragraph" element={<WrappedParagraph />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
