import { handleUnauthorized } from "./apiUtils";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// Get All Categories
export async function getCategories(page = 1, limit = 10) {
  const response = await fetch(
    `${API_URL}?page=${page}&limit=${limit}`,
    {
      credentials: "include",
    }
  );

  const data = await response.json();

  if (await handleUnauthorized(response)) return;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}


// Get Category by ID
export async function getCategoryById(id) {
  const response = await fetch(`${API_URL}/${id}`, {
     credentials: "include",
  });

  const data = await response.json();

 if (await handleUnauthorized(response)) return;

    if (!response.ok) {
      throw new Error(data.message);
    }

  return data.category;
}

// Create Category
export async function createCategory(name) {
  const response = await fetch(API_URL, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });

  const data = await response.json();

  if (await handleUnauthorized(response)) return;

    if (!response.ok) {
      throw new Error(data.message);
    }

  return data.category;
}

// Update Category
export async function updateCategory(id, name) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });

  const data = await response.json();

  if (await handleUnauthorized(response)) return;

    if (!response.ok) {
      throw new Error(data.message);
    }

  return data.category;
}

// Delete Category (Soft Delete)
export async function deleteCategory(id) {
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