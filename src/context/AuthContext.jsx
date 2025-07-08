// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";   // ← make sure this is the right path

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser]   = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for sign‑in / sign‑out
    const unsub = onAuthStateChanged(auth, (cur) => {
      setUser(cur);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // simple logout helper
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
