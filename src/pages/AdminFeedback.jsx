import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedback = async () => {
    try {
      const q = query(collection(db, "feedback"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbacks(data);
    } catch (err) {
      console.error("Error fetching feedback:", err);
      alert("Error fetching feedback");
    } finally {
      setLoading(false);
    }
  };

  const deleteFeedback = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirm) return;
    await deleteDoc(doc(db, "feedback", id));
    setFeedbacks((prev) => prev.filter((f) => f.id !== id));
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-black text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-grow px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">
          💼 Admin Feedback Panel
        </h1>

        {loading ? (
          <Loader />
        ) : feedbacks.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">No feedback found.</p>
        ) : (
          <div className="space-y-6">
            {feedbacks.map((f) => (
              <div
                key={f.id}
                className="bg-white dark:bg-zinc-800 shadow-md rounded-xl p-6 border-l-4 border-purple-500 dark:border-purple-700"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="text-lg font-semibold">{f.name}</p>
                    <p className="text-sm text-purple-600 dark:text-purple-300">{f.email}</p>
                  </div>
                  <button
                    onClick={() => deleteFeedback(f.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    ❌ Delete
                  </button>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-200 whitespace-pre-wrap mb-2">
                  {f.message}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {f.timestamp?.toDate().toLocaleString() || "No timestamp"}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
