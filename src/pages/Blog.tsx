import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase, type Post } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import newpic from "../assets/my new pic.jpeg";

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
}

export default function Blog() {
  const { session } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("draft", false)
        .order("published_at", { ascending: false });

      if (error) {
        setError("Could not load posts.");
      } else {
        setPosts(data ?? []);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const handleDelete = async (slug: string) => {
    // SQL equivalent: DELETE FROM posts WHERE slug = '...'
    const { error } = await supabase.from("posts").delete().eq("slug", slug);
    if (!error) {
      setPosts((prev) => prev.filter((p) => p.slug !== slug));
      setDeletingSlug(null);
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-5 sm:px-8 md:px-10 pt-32 pb-20">
        <div className="max-w-[720px] mx-auto">
          <div className="flex items-start justify-between gap-4 mb-10">
            <p className="text-[11px] text-[#888] tracking-[0.14em] uppercase font-mono">
              Writing
            </p>
            {session && (
              <Link
                to="/blog/new"
                className="text-[11px] text-[#777] tracking-[0.1em] uppercase no-underline border border-[#222] px-3 py-1.5 rounded hover:text-white hover:border-[#444] transition-colors duration-200"
              >
                + Write
              </Link>
            )}
          </div>

          {/* author card */}
          <div className="flex items-center gap-4 mb-10">
            <img
              src={newpic}
              alt="Adeoluwa"
              className="w-12 h-12 rounded-full object-cover object-top grayscale"
            />
            <div>
              <p className="text-[14px] font-medium text-[#d4d4d4]">Adeoluwa Adegoke</p>
              <p className="text-[12px] text-[#777]">Full-stack developer. Writing about what I build and live.</p>
            </div>
          </div>

          <h1
            className="font-black text-white tracking-[-0.03em] leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            BLOG
          </h1>
          <p className="text-[13px] text-[#999] mb-16">
            Things I'm building, thinking about, and living through.
          </p>

          {loading && (
            <p className="text-[13px] text-[#777] font-mono">Loading...</p>
          )}

          {error && (
            <p className="text-[13px] text-red-800">{error}</p>
          )}

          {!loading && !error && posts.length === 0 && (
            <p className="text-[13px] text-[#777]">No posts yet.</p>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="flex flex-col">
              {posts.map((post) => (
                <div key={post.slug} className="border-t border-[#1a1a1a]">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group py-8 flex flex-col gap-2.5 no-underline -mx-4 px-4 hover:bg-[#0d0d0d] transition-colors duration-200"
                  >
                    <div className="flex justify-between items-start gap-6">
                      <span className="text-[17px] sm:text-[19px] font-medium text-[#d4d4d4] group-hover:text-white transition-colors duration-200 leading-snug">
                        {post.title}
                      </span>
                      <span className="text-[11px] text-[#777] font-mono shrink-0 mt-1">
                        {formatDate(post.published_at)}
                      </span>
                    </div>
                    {post.excerpt && (
                      <p className="text-[13px] text-[#999] leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
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
                  </Link>

                  {session && (
                    <div className="flex items-center gap-4 pb-4 px-0">
                      {deletingSlug === post.slug ? (
                        <>
                          <span className="text-[11px] text-[#777]">Delete this post?</span>
                          <button
                            onClick={() => handleDelete(post.slug)}
                            className="text-[11px] text-red-500 hover:text-red-400 transition-colors bg-transparent border-0 cursor-pointer p-0"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setDeletingSlug(null)}
                            className="text-[11px] text-[#777] hover:text-[#aaa] transition-colors bg-transparent border-0 cursor-pointer p-0"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => navigate(`/blog/edit/${post.slug}`)}
                            className="text-[11px] text-[#777] tracking-[0.08em] uppercase hover:text-white transition-colors bg-transparent border-0 cursor-pointer p-0"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => setDeletingSlug(post.slug)}
                            className="text-[11px] text-[#777] tracking-[0.08em] uppercase hover:text-red-500 transition-colors bg-transparent border-0 cursor-pointer p-0"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-[#1a1a1a]" />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
