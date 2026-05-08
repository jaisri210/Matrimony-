import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  autoConnect: false, // ✅ IMPORTANT
  transports: ["websocket"], // optional but stable
});

export default socket;
