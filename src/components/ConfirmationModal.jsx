// src/components/ConfirmationModal.jsx
export default function ConfirmationModal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl w-full max-w-lg shadow-xl relative">
        <h2 className="text-lg font-semibold mb-4 text-purple-700 dark:text-purple-300">{title}</h2>
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-white"
        >
          ✖
        </button>
      </div>
    </div>
  );
}
