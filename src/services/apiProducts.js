import supabase from "./supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.log("product not abe to be load");
  }
  // console.table(products);

  return products;
}
