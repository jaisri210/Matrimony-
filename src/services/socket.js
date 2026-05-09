import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL, {
  autoConnect: false, // ✅ IMPORTANT
  transports: ["websocket"], // optional but stable
});

export default socket;
