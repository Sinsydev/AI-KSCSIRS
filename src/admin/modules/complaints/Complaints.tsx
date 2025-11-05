import { useState } from "react";
import type { Complaint } from "./types";
import ComplaintFilters from "./ComplaintFilters";
import ComplaintTable from "./ComplaintTable";
import ComplaintModal from "./ComplaintModal";
import Pagination from "./Pagination";

export default function Complaints() {
  const [showModal, setShowModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null
  );

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
      <h1 className="text-3xl font-bold text-[#0a1f44] mb-6">
        Complaint Management
      </h1>
      <ComplaintFilters />
      <ComplaintTable
        onView={(complaint) => {
          setSelectedComplaint(complaint);
          setShowModal(true);
        }}
      />
      <Pagination />
      {showModal && (
        <ComplaintModal
          complaint={selectedComplaint}
          onClose={() => {
            setShowModal(false);
            setSelectedComplaint(null);
          }}
        />
      )}
    </div>
  );
}
