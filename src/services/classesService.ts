import { supabase } from "./supabaseClient";

export async function getClasses() {
  const { data, error } = await supabase
    .from("classes")
    .select("*")
    .order("name");

  if (error) throw error;

  return data;
}
