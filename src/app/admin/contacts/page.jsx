"use client";

import { useEffect, useState } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";
import Pagination from "@/components/common/Pagination";
import toast from "react-hot-toast";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import TableLayout from "@/components/admin/ui/TableLayout";
import Modal from "@/components/admin/ui/Modal";
import Button from "@/components/common/Button";
import ContactTable from "@/components/admin/contact/ContactTable";

import {
  getContacts,
  updateContact,
} from "@/services/contactService";

export default function ContactsPage() {
  const authLoading = useAdminAuth();

  const [contacts, setContacts] = useState([]);

  const [pagination, setPagination] = useState({
  page: 1,
  limit: 10,
  totalPages: 1,
  totalRecords: 0,
});

  const [loading, setLoading] = useState(false);

  const [closeModal, setCloseModal] = useState(false);

  const [selectedContact, setSelectedContact] = useState(null);

  const [remarks, setRemarks] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const loadContacts = async (
    page = pagination.page,
    limit = pagination.limit,
    status = statusFilter
  ) => {
    try {
      const data = await getContacts(
        page,
        limit,
        status
      );

      setContacts(data.contacts);
      setPagination(data.pagination);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = async (page) => {
    await loadContacts(
      page,
      pagination.limit,
      statusFilter
    );
  };

  useEffect(() => {
    if (!authLoading) return;

    (async () => {
      try {
        const data = await getContacts(1, pagination.limit, statusFilter);
        setContacts(data.contacts);
        setPagination(data.pagination);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [authLoading]);

  useEffect(() => {
    if (!authLoading) return;

    (async () => {
      try {
        const data = await getContacts(1, pagination.limit, statusFilter);
        setContacts(data.contacts);
        setPagination(data.pagination);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [statusFilter]);

  // ----------------------------
  // In Progress
  // ----------------------------

  const handleInProgress = async (contact) => {
    try {
      await updateContact(contact.id, {
        status: "In Progress",
        remarks: contact.remarks || "",
      });
      toast.success("Status updated successfully.");

      loadContacts();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ----------------------------
  // Open Close Modal
  // ----------------------------

  const handleCloseClick = (contact) => {
    setSelectedContact(contact);
    setRemarks(contact.remarks || "");
    setCloseModal(true);
  };

  // ----------------------------
  // Save Close
  // ----------------------------

  const handleCloseInquiry = async () => {
    if (!remarks.trim()) {
      toast.error("Remarks are required.");
      return;
    }

    try {
      setLoading(true);

      await updateContact(selectedContact.id, {
        status: "Closed",
        remarks,
      });

      toast.success("Inquiry closed successfully.");
      

      await loadContacts();

      setCloseModal(false);

      setSelectedContact(null);

      setRemarks("");

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
  return null;
}

  return (
    <AdminLayout>

      <div className="flex h-full flex-col gap-8">

        {/* <div>

          <h1 className="text-3xl font-bold text-neutral-800">
            Contact Inquiries
          </h1>

          <p className="mt-2 text-neutral-500">
            Manage customer inquiries.
          </p>

        </div> */}

        <TableLayout
          title="Contacts"
          actions={
            <div className="flex items-center gap-3">

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
                className="
                  cursor-pointer
                  rounded-xl
                  border
                  border-neutral-200
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-neutral-700
                  shadow-sm
                  outline-none
                  transition
                  hover:border-primary-500
                  focus:border-primary-700
                "
              >
                <option value="All">
                  All Status
                </option>

                <option value="Pending">
                  Pending
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Closed">
                  Closed
                </option>

              </select>

            </div>
          }
        >

          <ContactTable
            contacts={contacts}
            pagination={pagination}
            onPageChange={handlePageChange}
            onInProgress={handleInProgress}
            onCloseInquiry={handleCloseClick}
          />

        </TableLayout>

      </div>

      {/* Close Modal */}

      <Modal
        open={closeModal}
        onClose={() => setCloseModal(false)}
        title="Close Inquiry"
      >

        <div className="space-y-5">

          <div>

            <label className="mb-2 block font-medium">
              Remarks
            </label>

            <textarea
              rows={5}
              value={remarks}
              onChange={(e) =>
                setRemarks(e.target.value)
              }
              className="w-full rounded-lg border border-neutral-300 p-3 outline-none focus:border-neutral-700"
              placeholder="Enter closing remarks..."
            />

          </div>

          <div className="flex justify-end gap-3">

            <Button
              variant="modelCancel"
              onClick={() =>
                setCloseModal(false)
              }
            >
              Cancel
            </Button>

            <Button
              onClick={handleCloseInquiry}
            >
              {loading ? "Saving..." : "Save"}
            </Button>

          </div>

        </div>

      </Modal>

    </AdminLayout>
  );
}