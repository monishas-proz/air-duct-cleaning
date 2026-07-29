import Image from "next/image";

export default function ImageTable({
  images,
  selectedCategory,
  onDelete,
}) {
  const imageBaseUrl = `${process.env.NEXT_PUBLIC_API_URL.replace(
    "/api",
    ""
  )}/uploads/categories`;

  return (
    /* Fill the parent wrapper completely, let table rows scroll inside */
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <div className="flex-1 overflow-y-auto overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-neutral-100">
            <tr>
              <th className="border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left text-sm font-semibold">
                S.No
              </th>
              <th className="border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left text-sm font-semibold">
                Preview
              </th>
              <th className="border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-left text-sm font-semibold">
                Created At
              </th>
              <th className="border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {images.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-10 text-center text-neutral-500">
                  No Images Found
                </td>
              </tr>
            ) : (
              images.map((image, index) => (
                <tr
                  key={image.id}
                  className="border-t border-neutral-200 transition-colors hover:bg-neutral-50"
                >
                  <td className="px-6 py-4">{index + 1}</td>

                  <td className="px-6 py-4">
                    <div className="relative h-20 w-28 overflow-hidden rounded-lg border border-neutral-200">
                      <Image
                        src={`${imageBaseUrl}/${selectedCategory}/${image.image}`}
                        alt="Category Image"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </td>

                  <td className="px-6 py-4 text-neutral-600">
                    {new Date(image.createdAt).toLocaleDateString("en-IN")}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      type="button"
                      onClick={() => onDelete(image)}
                      className="font-medium text-red-600 transition-colors hover:text-red-800 cursor-pointer"
                    >
                      Delete
                    </button>
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