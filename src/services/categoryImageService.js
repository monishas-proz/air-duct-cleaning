import { handleUnauthorized } from "./apiUtils";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/category-images`;

// Get Images
// categoryId = "all" => all images
// categoryId = 1 => particular category
export async function getCategoryImages(categoryId = "all") {
  const response = await fetch(`${API_URL}/${categoryId}`, {
     credentials: "include",
  });

  const data = await response.json();

  if (await handleUnauthorized(response)) return;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.images;
}

// Upload Image
export async function uploadCategoryImage(formData) {
  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
     credentials: "include",
    body: formData,
  });

  const data = await response.json();

  if (await handleUnauthorized(response)) return;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.image;
}

// Delete Image
export async function deleteCategoryImage(id) {
  const response = await fetch(`${API_URL}/${id}/delete`, {
    method: "PATCH",
    credentials: "include",
  });

  const data = await response.json();

  if (await handleUnauthorized(response)) return;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}