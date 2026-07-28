"use client";

import { useRef, useState } from "react";

import Button from "@/components/common/Button";
import { uploadCategoryImage } from "@/services/categoryImageService";

export default function ImageForm({
  categoryId,
  onClose,
  onSuccess,
}) {
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("categoryId", categoryId);
      formData.append("image", image);

      await uploadCategoryImage(formData);

      await onSuccess();

      setImage(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

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
      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Category Image
        </label>

        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp"
          onChange={(e) => setImage(e.target.files[0])}
          className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-white hover:file:bg-emerald-700"
        />
      </div>

      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button type="submit">
          {loading ? "Uploading..." : "Upload Image"}
        </Button>
      </div>
    </form>
  );
}