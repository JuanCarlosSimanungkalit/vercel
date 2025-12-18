import "dotenv/config";
import cors from "cors";
import express from "express";

import authRoutes from "../../backend/src/routes/auth.routes.js";
import adminRoutes from "../../backend/src/routes/admin.routes.js";
import influencerRoutes from "../../backend/src/routes/influencer.routes.js";
import reviewRoutes from "../../backend/src/routes/review.routes.js";
import bookingRoutes from "../../backend/src/routes/booking.routes.js";
import chatRoutes from "../../backend/src/routes/chat.routes.js";

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    process.env.FRONTEND_URL || "http://localhost:3000",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/influencer", influencerRoutes);
app.use("/api/influencers", influencerRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/chats", chatRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

export default app;
