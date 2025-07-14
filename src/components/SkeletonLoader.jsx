// src/components/SkeletonLoader.jsx
import React from "react";

export default function SkeletonLoader() {
  return (
    <div className="space-y-6 animate-pulse">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md border-l-4 border-purple-300 dark:border-purple-700"
        >
          <div className="h-4 bg-gray-300 dark:bg-zinc-700 w-1/3 mb-3 rounded" />
          <div className="h-3 bg-gray-200 dark:bg-zinc-600 w-1/2 mb-2 rounded" />
          <div className="h-4 bg-gray-300 dark:bg-zinc-700 w-full mb-2 rounded" />
          <div className="h-4 bg-gray-300 dark:bg-zinc-700 w-5/6 rounded" />
        </div>
      ))}
    </div>
  );
}
