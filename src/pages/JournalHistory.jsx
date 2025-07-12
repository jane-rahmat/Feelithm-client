// src/pages/JournalHistory.jsx
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConfirmationModal from "../components/ConfirmationModal";
import { db } from "../firebase/firebase";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

export default function JournalHistory() {
  const [entries, setEntries] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [showTimestamp, setShowTimestamp] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchEntries = async () => {
      if (!user) return;
      const q = query(
        collection(db, "journals"),
        where("uid", "==", user.uid),
        orderBy("timestamp", "desc")
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEntries(data);
    };

    fetchEntries();
  }, [user]);

  const confirmDelete = async () => {
    if (!deleteId) return;
    await deleteDoc(doc(db, "journals", deleteId));
    setEntries((prev) => prev.filter((e) => e.id !== deleteId));
    setDeleteId(null);
  };

  const confirmEdit = async () => {
    if (!editId) return;
    await updateDoc(doc(db, "journals", editId), { entry: editText });
    setEntries((prev) =>
      prev.map((e) => (e.id === editId ? { ...e, entry: editText } : e))
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-zinc-900 dark:via-purple-900 dark:to-black text-gray-800 dark:text-white">
      <Navbar />
      <main className="flex-grow px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">
          📜 Journal History
        </h1>

        {entries.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">No journal entries found.</p>
        ) : (
          <div className="space-y-8">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="relative bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 dark:border-purple-700"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold">
                    Mood: {entry.emoji} {entry.mood}
                  </span>
                  <div className="flex gap-2 text-lg">
                    <button
                      onClick={() => {
                        setEditId(entry.id);
                        setEditText(entry.entry);
                      }}
                      className="text-yellow-500 hover:text-yellow-600"
                      title="Edit"
                    >
                      🖊️
                    </button>
                    <button
                      onClick={() => setDeleteId(entry.id)}
                      className="text-red-500 hover:text-red-600"
                      title="Delete"
                    >
                      ❌
                    </button>
                  </div>
                </div>

                <button
                  onClick={() =>
                    setShowTimestamp((prev) => (prev === entry.id ? null : entry.id))
                  }
                  className="text-xs text-purple-500 mb-2 underline"
                >
                  {showTimestamp === entry.id ? "Hide Date" : "Show Date & Time"}
                </button>

                {showTimestamp === entry.id && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {entry.timestamp?.toDate().toLocaleString() || "No timestamp"}
                  </p>
                )}

                <p className="whitespace-pre-line text-gray-800 dark:text-gray-100">{entry.entry}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />

      {/* ✅ Delete Modal */}
      {deleteId && (
        <ConfirmationModal
          title="Are you sure you want to delete this entry?"
          onClose={() => setDeleteId(null)}
        >
          <div className="flex justify-end gap-4">
            <button
              onClick={confirmDelete}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
            <button
              onClick={() => setDeleteId(null)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </ConfirmationModal>
      )}

      {/* ✅ Edit Modal */}
      {editId && (
        <ConfirmationModal title="Edit your journal entry" onClose={() => setEditId(null)}>
          <textarea
            className="w-full h-40 p-4 border border-purple-400 dark:border-purple-600 rounded-md text-black dark:text-white bg-white dark:bg-zinc-900 mb-4"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div className="flex justify-end gap-4">
            <button
              onClick={confirmEdit}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setEditId(null)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </ConfirmationModal>
      )}
    </div>
  );
}
