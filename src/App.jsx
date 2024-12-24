import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParentComponent from "./Components/PassingToChild";
import { WrappedHeading } from "./Components/HeadingComponent";
import { WrappedParagraph } from "./Components/ParagraphComponent";
import AccordianContainer from "./Components/accordian/AccordianContainer";
import Navbar from "./Components/navbar/Navbar";
import Context from "./Components/accordian/AccordianContext";
import { ThemeProvider } from "./Components/context/ThemeContext";
import Home from "./Components/home/Home";
import MemoUsage from "./Components/memoUsage/MemoUsage";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Context>
            <Navbar />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accordian" element={<AccordianContainer />} />
                <Route path="/parent1" element={<ParentComponent />} />
                <Route path="/heading" element={<WrappedHeading />} />
                <Route path="/parent2" element={<ParentComponent />} />
                <Route path="/paragraph" element={<WrappedParagraph />} />
                <Route path='/use-memo' element={<MemoUsage />} />
              </Routes>
            </div>
          </Context>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
