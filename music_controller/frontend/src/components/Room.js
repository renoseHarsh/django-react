import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Room() {
  const [roomInfo, setRoomInfo] = useState({
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
  });
  const { roomCode } = useParams();
  const getRoomDetail = async (code) => {
    try {
      const response = await fetch(`/api/get-room?code=${code}`);
      if (response.ok) {
        const data = await response.json();
        setRoomInfo({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host,
        });
    } else {
        setRoomInfo({
            votesToSkip: "Invalid",
            guestCanPause: "Invalid",
            isHost: "Invalid",
          });
    }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (roomCode) {
      getRoomDetail(roomCode);
    }
  }, [roomCode]);

  return (
    <div>
      <h1>Room Code: {roomCode}</h1>
      <p>Votes: {roomInfo.votesToSkip}</p>
      <p>Guest Can Pause: {roomInfo.guestCanPause.toString()}</p>
      <p>Is Host: {roomInfo.isHost.toString()}</p>
    </div>
  );
}

export default Room;
