"use client";

import { useEffect, useState } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import TableLayout from "@/components/admin/ui/TableLayout";
import Modal from "@/components/admin/ui/Modal";
import Button from "@/components/common/Button";
import Pagination from "@/components/common/Pagination";
import ImageTable from "@/components/admin/category/ImageTable";
import ImageForm from "@/components/admin/category/ImageForm";
import toast from "react-hot-toast";
import { getCategories } from "@/services/categoryService";
import {
  getCategoryImages,
  deleteCategoryImage,
} from "@/services/categoryImageService";

export default function ImagesPage() {
  
  const authLoading = useAdminAuth();

  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [pagination, setPagination] = useState({
  page: 1,
  limit: 10,
  totalPages: 1,
  totalRecords: 0,
});

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [showModal, setShowModal] =
    useState(false);

  const [deleteModalOpen, setDeleteModalOpen] =
    useState(false);

  const [selectedImage, setSelectedImage] =
    useState(null);

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  const loadImages = async (
    categoryId = selectedCategory,
    page = 1,
    limit = pagination.limit
  ) => {
    try {
      const data = await getCategoryImages(
        categoryId,
        page,
        limit
      );

      setImages(data.images);
      setPagination(data.pagination);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = async (page) => {
    await loadImages(selectedCategory, page, pagination.limit);
  };

  useEffect(() => {
    if (!authLoading) {
      loadCategories();
      loadImages("all", 1);
    }
  }, [authLoading]);

  useEffect(() => {
    if (!authLoading) {
      loadImages(selectedCategory, 1);
    }
  }, [selectedCategory, authLoading]);

  const handleDeleteClick = (image) => {
    setSelectedImage(image);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedImage) return;

    try {
      await deleteCategoryImage(selectedImage.id);
      toast.success("Image deleted successfully.");

     await loadImages(
        selectedCategory,
        pagination.page
      );

      setDeleteModalOpen(false);

      setSelectedImage(null);

    } catch (error) {
      toast.error(error.message);
    }
  };

  if (authLoading) {
  return null;
}

    return (
    <AdminLayout>
      <div className="flex h-full flex-col gap-8">

        <TableLayout
          title="Images"
          actions={
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="
                  cursor-pointer
                  rounded-xl
                  border
                  border-neutral-200
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-neutral-700
                  shadow-sm
                  outline-none
                  transition
                  hover:border-primary-500
                  focus:border-primary-700
                "
              >
                <option value="all">All Categories</option>

                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <Button
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto"
              >
                + Add Image
              </Button>

            </div>
          }
        >

          <ImageTable
            images={images}
            pagination={pagination}
            onPageChange={handlePageChange}
            onDelete={handleDeleteClick}
          />

        </TableLayout>

      </div>

      {/* Delete Image */}

      <Modal
        open={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedImage(null);
        }}
        title="Delete Image"
      >
        <div className="space-y-6">

          <p className="text-neutral-600">
            Are you sure you want to delete this image?
          </p>

          <div className="flex justify-end gap-3">

            <Button
              variant="modelCancel"
              onClick={() => {
                setDeleteModalOpen(false);
                setSelectedImage(null);
              }}
            >
              Cancel
            </Button>

            <Button
              onClick={confirmDelete}
            >
              Delete
            </Button>

          </div>

        </div>
      </Modal>

      {/* Upload Image */}

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title="Add Image"
      >
        <ImageForm
          categories={categories}
          onClose={() => setShowModal(false)}
          onSuccess={() =>
            loadImages(selectedCategory, pagination.page)
          }
        />
      </Modal>

    </AdminLayout>
  );
}