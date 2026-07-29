
import ActionMenu from "@/components/admin/ui/ActionMenu";

export default function CategoryTable({
  categories,
  onEdit,
  onDelete,
}) {

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <div className="flex-1 overflow-y-auto overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-neutral-100 shadow-sm">
            <tr>
              <th className="sticky top-0 z-10 border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left text-sm font-semibold">
                S.No
              </th>

              <th className="sticky top-0 z-10 border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left text-sm font-semibold">
                Category Name
              </th>

              <th className="sticky top-0 z-10 border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left text-sm font-semibold">
                Created At
              </th>

              <th className="sticky top-0 z-10 border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

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
                  className="border-t border-neutral-200 hover:bg-neutral-50 transition-colors"
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

                  <td className="px-6 py-4 text-center">
                    <ActionMenu
                      onEdit={() => onEdit(category)}
                      onDelete={() => onDelete(category)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}