import { io } from "socket.io-client";

const socket = io("https://mony.bazhilgroups.in", {
  autoConnect: false, // ✅ IMPORTANT
  transports: ["polling","websocket"], // optional but stable
});

export default socket;
