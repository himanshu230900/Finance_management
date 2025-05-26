import { createClient } from "@supabase/supabase-js";
import { ENV } from "./env";

// Create a single supabase client for the entire app
console.log("SUPABASE_URL length:", ENV.SUPABASE_URL?.length || 0);
console.log("SUPABASE_KEY length:", ENV.SUPABASE_KEY?.length || 0);
console.log(
  "SUPABASE_URL prefix:",
  ENV.SUPABASE_URL?.substring(0, 8) || "missing",
);
const supabase = createClient(ENV.SUPABASE_URL, ENV.SUPABASE_KEY);

export default supabase;
