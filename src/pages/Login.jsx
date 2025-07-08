import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.js"; // already initialized auth

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); // redirect to homepage
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 px-4">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>

        <label className="block mb-2 text-sm">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 text-sm">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Log In
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-600 font-medium">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
