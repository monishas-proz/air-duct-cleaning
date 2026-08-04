"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import Button from "@/components/common/Button";
import { uploadCategoryImage } from "@/services/categoryImageService";

export default function ImageForm({
  categories,
  onClose,
  onSuccess,
}) {
  const fileInputRef = useRef(null);

  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setCategoryId("");
    setTitle("");
    setDescription("");
    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryId) {
      toast.error("Please select a category.");
      return;
    }

    if (!title.trim()) {
      toast.error("Please enter image title.");
      return;
    }

    if (!image) {
      toast.error("Please select an image.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("categoryId", categoryId);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);

      await uploadCategoryImage(formData);

      toast.success("Image uploaded successfully.");

      await onSuccess();

      resetForm();

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
      className="space-y-5"
    >
      {/* Category */}

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Category
        </label>

        <select
          value={categoryId}
          onChange={(e) =>
            setCategoryId(e.target.value)
          }
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-primary-700"
        >
          <option value="">
            Select Category
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Title */}

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Image Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Enter image title"
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-primary-700"
        />
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Description
        </label>

        <textarea
          rows={4}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Enter description"
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-primary-700"
        />
      </div>

      {/* Upload */}

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-700">
          Upload Image
        </label>

        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
          className="block w-full cursor-pointer rounded-lg border border-neutral-300 px-3 py-2 text-sm file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-primary-700 file:px-4 file:py-2 file:text-white hover:file:bg-primary-800"
        />
      </div>

      <div className="flex justify-end gap-3">

        <Button
          type="button"
          variant="modelCancel"
          onClick={() => {
            resetForm();
            onClose();
          }}
        >
          Cancel
        </Button>

        <Button type="submit">
          {loading
            ? "Uploading..."
            : "Upload Image"}
        </Button>

      </div>
    </form>
  );
}