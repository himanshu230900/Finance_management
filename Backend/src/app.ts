import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { ENV } from "./config/env";

// Import routes
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import financeRoutes from "./routes/finances";

// Import middleware
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";

// Initialize express app
const app = express();

// Global middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Logging
if (ENV.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/finances", financeRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Error handling
app.use(notFoundHandler);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Convert to proper Express error handler middleware format
  errorHandler(err, req, res, next);
});
export default app;
