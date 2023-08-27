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
        <Route path="/" element={<h1>NO not ya</h1>} />
      </Routes>
    </Router>
  );
}

export default HomePage;
