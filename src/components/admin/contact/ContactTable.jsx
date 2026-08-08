"use client";

import ActionMenu from "@/components/admin/ui/ActionMenu";
import Pagination from "@/components/common/Pagination";
import { Inbox } from "lucide-react";

const thClass =
  "px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500";

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
        return "bg-yellow-100 text-yellow-800";

      case "In Progress":
        return "bg-blue-100 text-blue-700";

      case "Closed":
        return "bg-green-100 text-green-700";

      default:
        return "bg-neutral-100 text-neutral-700";
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <div className="flex-1 overflow-auto">
        <table className="w-full min-w-[1000px] border-collapse">
          <thead className="sticky top-0 z-20 bg-neutral-50">
            <tr>
              <th className={thClass}>S.No</th>
              <th className={thClass}>Name</th>
              <th className={thClass}>Organization</th>
              <th className={thClass}>Email</th>
              <th className={thClass}>Phone</th>
              <th className={thClass}>Service</th>
              <th className={thClass}>Status</th>
              <th className={thClass}>Remarks</th>
              <th className={`${thClass} text-center`}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={9}>
                  <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                      <Inbox size={22} className="text-neutral-400" />
                    </div>
                    <p className="text-sm font-medium text-neutral-600">
                      No contacts found
                    </p>
                    <p className="text-sm text-neutral-400">
                      Inquiries from your contact form will appear here.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              contacts.map((contact, index) => (
                <tr
                  key={contact.id}
                  className="border-t border-neutral-200 hover:bg-neutral-50"
                >
                  <td className="px-5 py-4 text-neutral-500">
                    {(pagination.page - 1) * pagination.limit + index + 1}
                  </td>

                  <td className="px-5 py-4 font-medium text-neutral-900">
                    {contact.fullName}
                  </td>

                  <td className="px-5 py-4 text-neutral-600">
                    {contact.organization || "-"}
                  </td>

                  <td className="px-5 py-4 text-neutral-600">
                    {contact.email}
                  </td>

                  <td className="px-5 py-4 text-neutral-600">
                    {contact.phone}
                  </td>

                  <td className="px-5 py-4 text-neutral-600">
                    {contact.service}
                  </td>

                  <td className="w-36 px-5 py-4">
                    <span
                      className={`inline-flex whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${badgeColor(
                        contact.status
                      )}`}
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
                      onInProgress={() => onInProgress(contact)}
                      onCloseInquiry={() => onCloseInquiry(contact)}
                    />
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
