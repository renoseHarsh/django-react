import React from "react";
import { BrowserRouter as Router, Routes ,Route, Link } from "react-router-dom";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

function HomePage() {
  return (
    <Router>
      <Routes>
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/" element={<p>NO not ya</p>} />
      </Routes>
    </Router>
  );
}

export default HomePage;
