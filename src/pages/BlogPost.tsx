import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { supabase, type Post } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { session } = useAuth();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDelete = async () => {
    if (!post) return;
    const { error } = await supabase.from("posts").delete().eq("id", post.id);
    if (!error) navigate("/blog", { replace: true });
  };

  useEffect(() => {
    async function fetchPost() {
      // SQL equivalent: SELECT * FROM posts WHERE slug = '...' AND draft = false LIMIT 1
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("draft", false)
        .single();

      if (error || !data) {
        navigate("/blog", { replace: true });
      } else {
        setPost(data);
      }
      setLoading(false);
    }

    fetchPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-[13px] text-[#777] font-mono">Loading...</p>
        </main>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-5 sm:px-8 md:px-10 pt-32 pb-24">
        <div className="max-w-[680px] mx-auto">
          {/* back link + admin actions */}
          <div className="flex items-center justify-between mb-12">
            <Link
              to="/blog"
              className="text-[11px] text-[#777] tracking-[0.1em] uppercase no-underline hover:text-[#aaa] transition-colors duration-200"
            >
              ← All posts
            </Link>
            {session && (
              <div className="flex items-center gap-4">
                <Link
                  to={`/blog/edit/${post.slug}`}
                  className="text-[11px] text-[#777] tracking-[0.08em] uppercase no-underline hover:text-white transition-colors duration-200"
                >
                  Edit
                </Link>
                {showDeleteConfirm ? (
                  <>
                    <span className="text-[11px] text-[#777]">Delete?</span>
                    <button
                      onClick={handleDelete}
                      className="text-[11px] text-red-500 hover:text-red-400 transition-colors bg-transparent border-0 cursor-pointer p-0"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(false)}
                      className="text-[11px] text-[#777] hover:text-[#aaa] transition-colors bg-transparent border-0 cursor-pointer p-0"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setShowDeleteConfirm(true)}
                    className="text-[11px] text-[#777] tracking-[0.08em] uppercase hover:text-red-500 transition-colors bg-transparent border-0 cursor-pointer p-0"
                  >
                    Delete
                  </button>
                )}
              </div>
            )}
          </div>

          {/* header */}
          <div className="mb-12">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-[#777] tracking-[0.08em] uppercase border border-[#1f1f1f] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-[28px] sm:text-[36px] font-bold text-white leading-snug tracking-[-0.02em] mb-4">
              {post.title}
            </h1>
            <p className="text-[11px] text-[#777] font-mono">
              {formatDate(post.published_at)}
            </p>
          </div>

          {/* body */}
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-[18px] font-semibold text-[#d4d4d4] mt-10 mb-4 tracking-[-0.01em]">
                  {children}
                </h2>
              ),
              p: ({ children }) => (
                <p className="text-[15px] text-[#aaa] leading-[1.8] mb-6">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="mb-6 pl-4 flex flex-col gap-2">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="text-[15px] text-[#aaa] leading-[1.8] list-disc list-outside ml-2">
                  {children}
                </li>
              ),
              code: ({ children }) => (
                <code className="text-[13px] text-[#aaa] bg-[#141414] border border-[#1f1f1f] px-1.5 py-0.5 rounded font-mono">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-[#0f0f0f] border border-[#1a1a1a] rounded p-4 mb-6 overflow-x-auto text-[13px] text-[#aaa] font-mono leading-relaxed">
                  {children}
                </pre>
              ),
              strong: ({ children }) => (
                <strong className="text-[#c4c4c4] font-semibold">{children}</strong>
              ),
            }}
          >
            {post.body}
          </ReactMarkdown>

          {/* footer nav */}
          <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex items-center justify-between">
            <Link
              to="/blog"
              className="text-[11px] text-[#aaa] tracking-[0.1em] uppercase no-underline hover:text-white transition-colors duration-200"
            >
              ← Back to all posts
            </Link>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-[11px] text-[#777] tracking-[0.08em] uppercase hover:text-[#aaa] transition-colors duration-200 bg-transparent border-0 cursor-pointer p-0"
            >
              {copied ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  Copy link
                </>
              )}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
