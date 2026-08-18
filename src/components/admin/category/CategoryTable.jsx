import { Pencil, Trash2, FolderOpen } from "lucide-react";
import Pagination from "@/components/common/Pagination";

const thClass =
  "border-b border-neutral-200 bg-neutral-50 px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500";

export default function CategoryTable({
  categories,
  pagination,
  onPageChange,
  onEdit,
  onDelete,
}) {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white">
      {/* Scrollable Table */}
      <div className="min-h-0 flex-1 overflow-auto">
        <table className="min-w-full table-fixed border-collapse">
          {/* Sticky Header */}
          <thead className="sticky top-0 z-10">
            <tr>
              <th className={`${thClass} w-20`}>S.No</th>

              <th className={`${thClass}`}>Category Name</th>

              <th className={`${thClass}`}>Created At</th>

              <th className={`${thClass} text-center`}>Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan={4}>
                  <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                      <FolderOpen size={22} className="text-neutral-400" />
                    </div>
                    <p className="text-sm font-medium text-neutral-600">
                      No categories found
                    </p>
                    <p className="text-sm text-neutral-400">
                      Add your first category to get started.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              categories.map((category, index) => (
                <tr
                  key={category.id}
                  className="border-t border-neutral-200 transition-colors hover:bg-neutral-50"
                >
                  <td className="px-6 py-4 text-neutral-500">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 font-medium text-neutral-900">
                    {category.name}
                  </td>

                  <td className="px-6 py-4 text-neutral-600">
                    {new Date(category.createdAt).toLocaleDateString("en-IN")}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        type="button"
                        onClick={() => onEdit(category)}
                        title="Edit category"
                        aria-label={`Edit ${category.name}`}
                        className="cursor-pointer rounded-lg p-2 text-blue-600 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete(category)}
                        title="Delete category"
                        aria-label={`Delete ${category.name}`}
                        className="cursor-pointer rounded-lg p-2 text-red-600 transition hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
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
