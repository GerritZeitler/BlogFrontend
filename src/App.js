import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Admintool from "./pages/Admintool"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admintool />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;