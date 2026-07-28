const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/category-images`;

function getToken() {
  return localStorage.getItem("admin_token");
}

// Get Images by Category
export async function getCategoryImages(categoryId) {
  const response = await fetch(`${API_URL}/${categoryId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.images;
}

// Upload Image
export async function uploadCategoryImage(formData) {
  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.image;
}

export async function deleteCategoryImage(id) {
  const response = await fetch(`${API_URL}/${id}/delete`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}