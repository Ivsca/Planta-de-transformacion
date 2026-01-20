import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../../pages/Landing";
import DashboardPIT from "../../pages/DashboardPIT";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard-pit" element={<DashboardPIT />} />

      </Routes>
    </BrowserRouter>
  );
}

