import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TicketsPage from "./components/TicketsPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tickets" replace />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/tickets/:id" element={<TicketsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;