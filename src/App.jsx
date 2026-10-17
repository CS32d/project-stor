import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LivingRoomPage from "./pages/LivingRoomPage";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/living-room" element={<LivingRoomPage />} />
      </Route>
    </Routes>
  );
}

export default App;