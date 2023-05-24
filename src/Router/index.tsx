import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../Pages/Error/NotFound";
import KingDetail from "@src/Members/MDK/RoomDetail/KingDetail";
import LandingPage from "@src/Members/MDK/LandingPage";
import StandardDetail from "@src/Members/MDK/RoomDetail/StandardDetail";
import DoubleDetail from "@src/Members/MDK/RoomDetail/DoubleDetail";
import Services from "@src/Members/MDK/Services";
import RoomManage from "@src/Members/MDK/RoomManage";
import Payment from "@src/Members/MDK/Payment";
import SignUp from "@src/Members/MDK/SignUp";
import Invoice from "@src/Members/MDK/Invoice";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/room" element={<RoomManage />} />
        <Route path="/standard-detail" element={<StandardDetail />} />
        <Route path="/double-detail" element={<DoubleDetail />} />
        <Route path="/king-detail" element={<KingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
