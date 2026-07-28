"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AdminLayout from "@/components/admin/layout/AdminLayout";
import Button from "@/components/common/Button";
import Modal from "@/components/admin/ui/Modal";
import CategoryForm from "@/components/admin/category/CategoryForm";
import CategoryTable from "@/components/admin/category/CategoryTable";
import TableLayout from "@/components/admin/ui/TableLayout";

import {
  getCategories,
  deleteCategory,
} from "@/services/categoryService";

export default function CategoriesPage() {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteCategoryData, setDeleteCategoryData] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    if (!token) {
      router.replace("/admin/login");
      return;
    }

    loadCategories();
  }, []);

  const handleAddCategory = () => {
    setSelectedCategory(null);
    setShowModal(true);
  };

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
    setShowModal(false);
  };

  const handleDeleteClick = (category) => {
    setDeleteCategoryData(category);
    setDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      setLoading(true);

      await deleteCategory(deleteCategoryData.id);

      await loadCategories();

      setDeleteModal(false);
      setDeleteCategoryData(null);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="flex h-full flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-800">
            Welcome Back
          </h1>

          <p className="mt-2 text-neutral-500">
            Manage your Air Care website from one place.
          </p>
        </div>

        <TableLayout
          title="Categories"
          actions={
            <Button onClick={handleAddCategory}>
              + Add Category
            </Button>
          }
        >
          <CategoryTable
            categories={categories}
            onEdit={handleEditCategory}
            onDelete={handleDeleteClick}
          />
        </TableLayout>

        <Modal
          open={showModal}
          onClose={handleCloseModal}
          title={selectedCategory ? "Edit Category" : "Add Category"}
        >
          <CategoryForm
            category={selectedCategory}
            onClose={handleCloseModal}
            onSuccess={loadCategories}
          />
        </Modal>

        <Modal
          open={deleteModal}
          onClose={() => setDeleteModal(false)}
          title="Delete Category"
        >
          <div className="space-y-6">
            <p className="text-neutral-600">
              Are you sure you want to delete{" "}
              <strong>{deleteCategoryData?.name}</strong>?
            </p>

            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={() => setDeleteModal(false)}
              >
                Cancel
              </Button>

              <Button onClick={handleDelete}>
                {loading ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </AdminLayout>
  );
}