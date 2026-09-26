import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// During local dev without a .env.local file these will be undefined —
// the API route checks for that and returns a clear error instead of
// crashing, so `npm run dev` still works for editing pages.
export const supabase = url && key ? createClient(url, key) : null;
