import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage";
import StandardDetail from "../RoomDetail/StandardDetail";
import DoubleDetail from "../RoomDetail/DoubleDetail";
import KingDetail from "../RoomDetail/KingDetail";
import NotFound from "@src/Pages/Error/NotFound";

const Navigate: React.FC = () => {
  // const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/standard-detail" element={<StandardDetail />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/double-detail" element={<DoubleDetail />} />
        <Route path="/king-detail" element={<KingDetail />} />
      </Routes>
    </>
  );
};

export default Navigate;
