import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FAQPage from "./pages/FAQPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;