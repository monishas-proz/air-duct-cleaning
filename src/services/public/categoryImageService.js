const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/public/category-images`;

export async function getCategoryImages(categoryId) {
  const response = await fetch(`${API_URL}/${categoryId}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.images;
}