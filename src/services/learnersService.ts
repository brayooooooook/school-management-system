import { supabase } from "./supabaseClient";

export async function getLearners() {
  const { data, error } = await supabase
    .from("learners")
    .select("*")
    .order("full_name");

  if (error) throw error;

  return data;
}
