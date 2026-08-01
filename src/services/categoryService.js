import { handleUnauthorized } from "./apiUtils";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// Get All Categories
export async function getCategories() {
  const response = await fetch(API_URL, {
     credentials: "include",
  });

  const data = await response.json();

  if (await handleUnauthorized(response)) return;

    if (!response.ok) {
      throw new Error(data.message);
    }

  return data.categories;
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
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
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