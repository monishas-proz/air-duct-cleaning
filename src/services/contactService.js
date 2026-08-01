import { handleUnauthorized } from "./apiUtils";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// -----------------------------
// Public Contact Form
// -----------------------------
export async function submitContact(data) {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (await handleUnauthorized(response)) return;

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}

// -----------------------------
// Admin Contacts
// -----------------------------


// Get All Contacts
export async function getContacts() {
  const response = await fetch(`${API_URL}/admin/contacts`, {
    credentials: "include",
  });

  const data = await response.json();

  if (await handleUnauthorized(response)) return;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.contacts;
}

// Get Contact By ID
export async function getContactById(id) {
  const response = await fetch(`${API_URL}/admin/contacts/${id}`, {
     credentials: "include",
  });

  const data = await response.json();

  if (await handleUnauthorized(response)) return;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.contact;
}

// Update Contact
export async function updateContact(id, payload) {
  const response = await fetch(`${API_URL}/admin/contacts/${id}`, {
    method: "PATCH",
     credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (await handleUnauthorized(response)) return;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data.contact;
}