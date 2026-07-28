"use client";

import { useRef, useEffect, useState } from "react";

import Input from "../ui/Input";
import Button from "@/components/common/Button";

import {
  createCategory,
  updateCategory,
} from "@/services/categoryService";

export default function CategoryForm({
  category,
  onClose,
  onSuccess,
}) {
  const inputRef = useRef(null);

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const isEdit = !!category;

  useEffect(() => {
    inputRef.current?.focus();

    if (category) {
      setName(category.name);
    } else {
      setName("");
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Category name is required.");
      return;
    }

    try {
      setLoading(true);

      if (isEdit) {
        await updateCategory(category.id, name.trim());
      } else {
        await createCategory(name.trim());
      }

      await onSuccess();

      setName("");

      onClose();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <Input
        ref={inputRef}
        label="Category Name"
        placeholder="Enter category name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button type="submit">
          {loading
            ? isEdit
              ? "Updating..."
              : "Saving..."
            : isEdit
            ? "Update Category"
            : "Save Category"}
        </Button>
      </div>
    </form>
  );
}