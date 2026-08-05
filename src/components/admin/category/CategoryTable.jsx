import { Pencil, Trash2 } from "lucide-react";
import Pagination from "@/components/common/Pagination";

export default function CategoryTable({
  categories,
  pagination,
  onPageChange,
  onEdit,
  onDelete,
}) {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      {/* Scrollable Table */}
      <div className="min-h-0 flex-1 overflow-auto">
        <table className="min-w-full table-fixed border-collapse">

          {/* Sticky Header */}
          <thead className="sticky top-0 z-10 bg-neutral-100 shadow-sm">
            <tr>
              <th className="border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left">
                S.No
              </th>

              <th className="border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left">
                Category Name
              </th>

              <th className="border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left">
                Created At
              </th>

              <th className="border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="py-10 text-center text-neutral-500"
                >
                  No Categories Found
                </td>
              </tr>
            ) : (
              categories.map((category, index) => (
                <tr
                  key={category.id}
                  className="border-t border-neutral-200 transition-colors hover:bg-neutral-50"
                >
                  <td className="px-6 py-4">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 font-medium text-neutral-800">
                    {category.name}
                  </td>

                  <td className="px-6 py-4 text-neutral-600">
                    {new Date(category.createdAt).toLocaleDateString("en-IN")}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => onEdit(category)}
                        className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete(category)}
                        className="rounded-lg p-2 text-red-600 transition hover:bg-red-50 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

      {/* Fixed Footer */}
      <div className="shrink-0 border-t border-neutral-200 bg-neutral-100 px-6 py-4">
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