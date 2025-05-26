import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: parseInt(process.env.PORT || "3000", 10),
  SUPABASE_URL: (process.env.SUPABASE_URL || "").trim(),
  SUPABASE_KEY: (process.env.SUPABASE_KEY || "").trim(),
  JWT_SECRET: process.env.JWT_SECRET || "supersecret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
};

// Validate env variables
if (!ENV.SUPABASE_URL || !ENV.SUPABASE_KEY) {
  throw new Error(
    "Missing required environment variables for Supabase connection",
  );
}
