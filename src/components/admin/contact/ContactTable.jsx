"use client";

import ActionMenu from "@/components/admin/ui/ActionMenu";
import Pagination from "@/components/common/Pagination";
export default function ContactTable({
  contacts,
  pagination,
  onPageChange,
  onInProgress,
  onCloseInquiry,
}) {
  const badgeColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "In Progress":
        return "bg-blue-100 text-blue-700";

      case "Closed":
        return "bg-green-100 text-green-700";

      default:
        return "bg-neutral-100 text-neutral-700";
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">

      <div className="flex-1 overflow-auto">

        <table className="min-w-full border-collapse">

          <thead className="sticky top-0 z-20 bg-neutral-100 shadow-sm">

            <tr>

              <th className="px-5 py-4 text-left">
                S.No
              </th>

              <th className="px-5 py-4 text-left">
                Name
              </th>

              <th className="px-5 py-4 text-left">
                Organization
              </th>

              <th className="px-5 py-4 text-left">
                Email
              </th>

              <th className="px-5 py-4 text-left">
                Phone
              </th>

              <th className="px-5 py-4 text-left">
                Service
              </th>

              <th className="px-5 py-4 text-left">
                Status
              </th>

              <th className="px-5 py-4 text-left">
                Remarks
              </th>

              <th className="px-5 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {contacts.length === 0 ? (

              <tr>

                <td
                  colSpan={9}
                  className="py-10 text-center"
                >
                  No Contacts Found
                </td>

              </tr>

            ) : (

              contacts.map((contact, index) => (

                <tr
                  key={contact.id}
                  className="border-t border-neutral-200 hover:bg-neutral-50"
                >

                  <td className="px-5 py-4">
                    {(pagination.page - 1) * pagination.limit + index + 1}
                  </td>

                  <td className="px-5 py-4 font-medium">
                    {contact.fullName}
                  </td>

                  <td className="px-5 py-4">
                    {contact.organization || "-"}
                  </td>

                  <td className="px-5 py-4">
                    {contact.email}
                  </td>

                  <td className="px-5 py-4">
                    {contact.phone}
                  </td>

                  <td className="px-5 py-4">
                    {contact.service}
                  </td>

                  <td className="w-36 px-5 py-4">

                    <span
                        className={`inline-flex whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${badgeColor(contact.status)}`}
                    >
                        {contact.status}
                    </span>

                   </td>

                  <td className="max-w-xs px-5 py-4 text-neutral-600">

                    {contact.remarks || "-"}

                  </td>

                  <td className="px-5 py-4 text-center">

                    <ActionMenu
                        type="contact"
                        status={contact.status}
                        onInProgress={() =>
                            onInProgress(contact)
                        }
                        onCloseInquiry={() =>
                            onCloseInquiry(contact)
                        }
                    />

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