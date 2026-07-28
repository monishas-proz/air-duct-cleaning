const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/public/categories`;

export async function getCategories() {
  const response = await fetch(API_URL);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.categories;
}