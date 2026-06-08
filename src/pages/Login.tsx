import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { session, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // already logged in — go straight to the editor
  if (!loading && session) return <Navigate to="/blog/new" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Invalid email or password.");
      setSubmitting(false);
    } else {
      navigate("/blog/new", { replace: true });
    }
  };

  const inputClass =
    "w-full bg-[#0d0d0d] border border-[#1f1f1f] rounded px-4 py-3 text-[14px] text-[#d4d4d4] placeholder-[#444] focus:outline-none focus:border-[#444] transition-colors duration-200";

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center px-5">
      <div className="w-full max-w-[380px]">
        <p className="text-[11px] text-[#888] tracking-[0.14em] uppercase font-mono mb-2">
          Admin
        </p>
        <h1 className="text-[28px] font-bold text-white tracking-[-0.02em] mb-10">
          Sign in
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            autoFocus
            className={inputClass}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className={inputClass}
          />

          {error && (
            <p className="text-[13px] text-red-500">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-white text-[#0a0a0a] text-[13px] font-medium px-6 py-3 rounded tracking-[0.04em] hover:bg-neutral-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
