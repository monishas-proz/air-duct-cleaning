"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AdminLayout from "@/components/admin/layout/AdminLayout";
import Button from "@/components/common/Button";
import Modal from "@/components/admin/ui/Modal";

import ImageTable from "@/components/admin/category/ImageTable";
import ImageForm from "@/components/admin/category/ImageForm";

import { getCategories } from "@/services/categoryService";
import {
  getCategoryImages,
  deleteCategoryImage,
} from "@/services/categoryImageService";

export default function ImagesPage() {
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadImages = async (categoryId) => {
    if (!categoryId) {
      setImages([]);
      return;
    }
    try {
      const data = await getCategoryImages(categoryId);
      setImages(data);
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

  useEffect(() => {
    loadImages(selectedCategory);
  }, [selectedCategory]);

  const handleDeleteClick = (image) => {
    setSelectedImage(image);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedImage) return;
    try {
      await deleteCategoryImage(selectedImage.id);
      await loadImages(selectedCategory);
      setDeleteModalOpen(false);
      setSelectedImage(null);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <AdminLayout>
      {/* Outer: fixed height column – no page scroll */}
      <div className="flex h-full min-h-0 flex-col gap-6 overflow-hidden">

        {/* Header – shrinks naturally */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-800">Images</h1>
          <p className="mt-2 text-neutral-500">Manage gallery images.</p>
        </div>

        {/* Category Filter – fixed height, never scrolls */}
        <div className="shrink-0 flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm md:flex-row md:items-end md:justify-between">
          <div className="w-full md:max-w-sm">
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none transition focus:border-emerald-600 cursor-pointer"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <Button onClick={() => setShowModal(true)} disabled={!selectedCategory}>
            + Add Image
          </Button>
        </div>

        {/* Image Table – fills ALL remaining height, rows scroll inside */}
        <div className="min-h-0 flex-1">
          {selectedCategory ? (
            <ImageTable
              images={images}
              selectedCategory={selectedCategory}
              onDelete={handleDeleteClick}
            />
          ) : (
            <div className="rounded-xl border border-dashed border-neutral-300 bg-white py-16 text-center text-neutral-500">
              Please select a category to view its images.
            </div>
          )}
        </div>

      </div>

      {/* Delete Modal */}
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
              variant="secondary"
              onClick={() => {
                setDeleteModalOpen(false);
                setSelectedImage(null);
              }}
            >
              Cancel
            </Button>
            <Button onClick={confirmDelete}>Delete</Button>
          </div>
        </div>
      </Modal>

      {/* Add Image Modal */}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title="Add Category Image"
      >
        <ImageForm
          categoryId={selectedCategory}
          onClose={() => setShowModal(false)}
          onSuccess={() => loadImages(selectedCategory)}
        />
      </Modal>
    </AdminLayout>
  );
}