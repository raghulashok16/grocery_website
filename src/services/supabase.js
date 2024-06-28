import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ubgjufsjpunbtdxlrtvx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViZ2p1ZnNqcHVuYnRkeGxydHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1NTQ2NTgsImV4cCI6MjAzNTEzMDY1OH0.KnwAXj8BACNpdI43_hn7Ifkx4n5EDrpLuBrFWGbpSZ0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
