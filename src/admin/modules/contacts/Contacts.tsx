import { useState } from "react";
import type { Contact } from "./types";
import ContactFilters from "./ContactFilters";
import ContactTable from "./ContactTable";
import ContactModal from "./ContactModal";
import Pagination from "./Pagination";

export default function Contacts() {
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h1 className="text-3xl font-bold text-[#0a1f44] mb-6">
        Contact Management
      </h1>
      <ContactFilters />
      <ContactTable
        onView={(contact) => {
          setSelectedContact(contact);
          setShowModal(true);
        }}
      />
      <Pagination />
      {showModal && (
        <ContactModal
          contact={selectedContact}
          onClose={() => {
            setShowModal(false);
            setSelectedContact(null);
          }}
        />
      )}
    </div>
  );
}
