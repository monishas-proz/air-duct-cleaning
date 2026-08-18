"use client";

import { useRef, useEffect, useState } from "react";

import Input from "../ui/Input";
import Button from "@/components/common/Button";
import toast from "react-hot-toast";
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

  const [prevCategory, setPrevCategory] = useState(category);

  const [name, setName] = useState(category?.name || "");
  const [loading, setLoading] = useState(false);

  const isEdit = !!category;

  if (category !== prevCategory) {
    setPrevCategory(category);
    setName(category?.name || "");
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Category name is required.");
      return;
    }

    try {
      setLoading(true);

      if (isEdit) {
        await updateCategory(category.id, name.trim());
        toast.success("Category updated successfully.");
      } else {
        await createCategory(name.trim());
        toast.success("Category created successfully.");
      }

      await onSuccess();

      setName("");

      onClose();
    } catch (error) {
      toast.error(error.message);
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
          variant="modelCancel"
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