import type { Contact } from "./types";

type Props = {
  contact: Contact | null;
  onClose: () => void;
};

export default function ContactModal({ contact, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold text-[#0a1f44] mb-4">
          Contact Details
        </h2>
        <p>
          <strong>Name:</strong> {contact?.name}
        </p>
        <p>
          <strong>Email:</strong> {contact?.email}
        </p>
        <p>
          <strong>Phone:</strong> {contact?.phone}
        </p>
        <p>
          <strong>Category:</strong> {contact?.category}
        </p>
        <p>
          <strong>Status:</strong> {contact?.status}
        </p>

        <div className="flex justify-end gap-4 mt-4">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
