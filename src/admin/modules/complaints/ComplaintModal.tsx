import type { Complaint } from "./types";

type Props = {
  complaint: Complaint | null;
  onClose: () => void;
};

export default function ComplaintModal({ complaint, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold text-[#0a1f44] mb-4">
          Complaint Details
        </h2>
        <p>
          <strong>User:</strong> {complaint?.user}
        </p>
        <p>
          <strong>Subject:</strong> {complaint?.subject}
        </p>
        <p>
          <strong>Message:</strong> {complaint?.message}
        </p>
        <p>
          <strong>Status:</strong> {complaint?.status}
        </p>
        <p>
          <strong>Date:</strong> {complaint?.date}
        </p>

        <textarea
          placeholder="Reply to complaint..."
          className="w-full mt-4 px-4 py-2 border rounded"
        />
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Close
          </button>
          <button className="px-4 py-2 bg-[#0a1f44] text-white rounded">
            Send Reply
          </button>
        </div>
      </div>
    </div>
  );
}
