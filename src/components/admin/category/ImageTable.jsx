"use client";

import Image from "next/image";
import ActionMenu from "@/components/admin/ui/ActionMenu";
import Pagination from "@/components/common/Pagination";
import { Trash2 } from "lucide-react";
export default function ImageTable({
  images,
  pagination,
  onPageChange,
  onDelete,
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">

      <div className="relative flex-1 overflow-auto">

        <table className="w-full min-w-[850px] border-collapse">

          <thead>

            <tr>

              <th className="sticky top-0 z-30 border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left shadow-sm">
                S.No
              </th>

              <th className="sticky top-0 z-30 border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left shadow-sm">
                Preview
              </th>

              <th className="sticky top-0 z-30 border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left shadow-sm">
                Category
              </th>

              <th className="sticky top-0 z-30 border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left shadow-sm">
                Created At
              </th>

              <th className="sticky top-0 z-30 border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left shadow-sm">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {images.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-10 text-center text-neutral-500"
                >
                  No Images Found
                </td>

              </tr>

            ) : (

              images.map((image, index) => (

                <tr
                  key={image.id}
                  className="border-t border-neutral-200 transition-colors hover:bg-neutral-50"
                >

                  <td className="px-6 py-4">
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

                  <td className="px-6 py-4 font-medium text-neutral-700">
                    {image.category?.name || "-"}
                  </td>

                  <td className="px-6 py-4 text-neutral-600">
                    {new Date(
                      image.createdAt
                    ).toLocaleDateString("en-IN")}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      type="button"
                      onClick={() => onDelete(image)}
                      className="cursor-pointer rounded-lg p-2 text-red-600 transition hover:bg-red-50 hover:text-red-700"
                      title="Delete Image"
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

      <div className="shrink-0 border-t border-neutral-200 bg-white px-6 py-4">
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