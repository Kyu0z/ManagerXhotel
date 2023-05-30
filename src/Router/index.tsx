import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../Pages/Error/NotFound";
import LandingPage from "@src/Members/MDK/LandingPage";
import Services from "@src/Members/MDK/Services";
import RoomManage from "@src/Members/MDK/RoomManage";
import Payment from "@src/Members/MDK/Payment";
import SignUp from "@src/Members/MDK/SignUp";
import Invoice from "@src/Members/MDK/Invoice";
import Dashboard from "@src/Members/MDK/Dashboard";
import RoomDetail from "@src/Members/MDK/RoomDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/room" element={<RoomManage />} />
        <Route path="/room-detail/:typeroom" element={<RoomDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
