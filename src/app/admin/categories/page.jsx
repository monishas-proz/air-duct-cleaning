"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import Button from "@/components/common/Button";
import Modal from "@/components/admin/ui/Modal";
import CategoryForm from "@/components/admin/category/CategoryForm";
import CategoryTable from "@/components/admin/category/CategoryTable";
import TableLayout from "@/components/admin/ui/TableLayout";
import useAdminAuth from "@/hooks/useAdminAuth";
import {
  getCategories,
  deleteCategory,
} from "@/services/categoryService";

export default function CategoriesPage() {
  const router = useRouter();
  const authLoading = useAdminAuth();

  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 1,
    totalRecords: 0,
  });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteCategoryData, setDeleteCategoryData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const loadCategories = async (page = pagination.page) => {
    try {
      const data = await getCategories(page, pagination.limit);

      setCategories(data.categories);

      setPagination(data.pagination);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = async (page) => {
    await loadCategories(page);
  };

   useEffect(() => {
  if (!authLoading) {
    loadCategories(1);
  }
}, [authLoading]);

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
      toast.success("Category deleted successfully.");

      await loadCategories(pagination.page);

      setDeleteModal(false);
      setDeleteCategoryData(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
  return null;
}

  return (
    <AdminLayout>
      <div className="flex h-full min-h-0 flex-col gap-8">
        {/* <div>
          <h1 className="text-3xl font-bold text-neutral-800">
            Welcome Back
          </h1>

          <p className="mt-2 text-neutral-500">
            Manage your Air Care website from one place.
          </p>
        </div> */}

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
            pagination={pagination}
            onPageChange={handlePageChange}
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
            onSuccess={() => loadCategories(pagination.page)}
          />
        </Modal>

        <Modal
          open={deleteModal}
          onClose={() => setDeleteModal(false)}
          title="Delete Category"
        >
          <div className="space-y-6">

            <div className="space-y-4">
              <p className="text-neutral-700">
                Are you sure you want to delete{" "}
                <strong>{deleteCategoryData?.name}</strong>?
              </p>

              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <h4 className="font-semibold text-red-700">
                  This action will:
                </h4>

                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-600">
                  <li>Delete the selected category.</li>
                  <li>Delete all images associated with this category.</li>
                  <li>This action cannot be undone.</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button
                variant="modelCancel"
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