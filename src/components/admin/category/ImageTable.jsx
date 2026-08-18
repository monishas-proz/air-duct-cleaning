"use client";

import Image from "next/image";
import Pagination from "@/components/common/Pagination";
import { Trash2, Images } from "lucide-react";

const thClass =
  "sticky top-0 z-30 border-b border-neutral-200 bg-neutral-50 px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500";

export default function ImageTable({
  images,
  pagination,
  onPageChange,
  onDelete,
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <div className="relative flex-1 overflow-auto">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr>
              <th className={`${thClass}`}>S.No</th>

              <th className={`${thClass}`}>Preview</th>

              <th className={`${thClass}`}>Category</th>

              <th className={`${thClass}`}>Created At</th>

              <th className={`${thClass} text-center`}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {images.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                      <Images size={22} className="text-neutral-400" />
                    </div>
                    <p className="text-sm font-medium text-neutral-600">
                      No images found
                    </p>
                    <p className="text-sm text-neutral-400">
                      Upload an image to show your work.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              images.map((image, index) => (
                <tr
                  key={image.id}
                  className="border-t border-neutral-200 transition-colors hover:bg-neutral-50"
                >
                  <td className="px-6 py-4 text-neutral-500">
                    {(pagination.page - 1) * pagination.limit + index + 1}
                  </td>

                  <td className="px-6 py-4">
                    <div className="relative isolate h-16 w-24 overflow-hidden rounded-lg border border-neutral-200 md:h-20 md:w-28">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL.replace(
                          "/api",
                          ""
                        )}/uploads/categories/${image.categoryId}/${image.image}`}
                        alt={image.title}
                        width={112}
                        height={80}
                        className="z-0 object-cover"
                        unoptimized
                      />
                    </div>
                  </td>

                  <td className="px-6 py-4 font-medium text-neutral-800">
                    {image.category?.name || "-"}
                  </td>

                  <td className="px-6 py-4 text-neutral-600">
                    {new Date(image.createdAt).toLocaleDateString("en-IN")}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      type="button"
                      onClick={() => onDelete(image)}
                      className="cursor-pointer rounded-lg p-2 text-red-600 transition hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                      title="Delete Image"
                      aria-label={`Delete ${image.title || "image"}`}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="shrink-0 border-t border-neutral-200 bg-neutral-50 px-6 py-4">
        <Pagination
          page={pagination.page}
          totalPages={pagination.totalPages}
          totalRecords={pagination.totalRecords}
          limit={pagination.limit}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
