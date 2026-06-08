import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { supabase, type Post } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function BlogEdit() {
  const { slug } = useParams<{ slug: string }>();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | null>(null);
  const [loadingPost, setLoadingPost] = useState(true);

  const [title, setTitle] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [draft, setDraft] = useState(true);
  const [tab, setTab] = useState<"write" | "preview">("write");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      // authenticated users can read all posts including drafts
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error || !data) {
        navigate("/blog", { replace: true });
        return;
      }

      setPost(data);
      setTitle(data.title);
      setNewSlug(data.slug);
      setExcerpt(data.excerpt ?? "");
      setBody(data.body);
      setTags(data.tags ?? []);
      setDraft(data.draft);
      setLoadingPost(false);
    }

    fetchPost();
  }, [slug, navigate]);

  const addTag = (raw: string) => {
    const tag = raw.trim().toLowerCase();
    if (tag && !tags.includes(tag)) setTags((prev) => [...prev, tag]);
    setTagInput("");
  };

  const onTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(tagInput);
    }
    if (e.key === "Backspace" && tagInput === "" && tags.length > 0) {
      setTags((prev) => prev.slice(0, -1));
    }
  };

  const removeTag = (tag: string) => setTags((prev) => prev.filter((t) => t !== tag));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;
    setError(null);
    setSubmitting(true);

    // SQL equivalent: UPDATE posts SET ... WHERE id = '...'
    const { error } = await supabase
      .from("posts")
      .update({
        title,
        slug: newSlug,
        excerpt: excerpt || null,
        body,
        tags: tags.length > 0 ? tags : null,
        draft,
        // if publishing for the first time, set published_at to now
        published_at: draft ? post.published_at : (post.published_at ?? new Date().toISOString()),
      })
      .eq("id", post.id);

    if (error) {
      setError("Failed to save. Try again.");
      setSubmitting(false);
      return;
    }

    navigate(draft ? "/blog" : `/blog/${newSlug}`);
  };

  const inputClass =
    "w-full bg-[#0d0d0d] border border-[#1f1f1f] rounded px-4 py-3 text-[14px] text-[#d4d4d4] placeholder-[#555] focus:outline-none focus:border-[#444] transition-colors duration-200";

  const labelClass = "block text-[11px] text-[#888] tracking-[0.1em] uppercase mb-2";

  if (loadingPost) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-[13px] text-[#555] font-mono">Loading...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <main className="px-5 sm:px-8 md:px-10 pt-32 pb-24 max-w-[800px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[11px] text-[#888] tracking-[0.14em] uppercase font-mono mb-1">
              Editing
            </p>
            <h1 className="text-[28px] font-bold text-white tracking-[-0.02em] truncate max-w-[400px]">
              {post?.title}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/blog"
              className="text-[11px] text-[#777] tracking-[0.1em] uppercase no-underline hover:text-[#aaa] transition-colors"
            >
              ← Back
            </Link>
            <button
              type="button"
              onClick={async () => { await signOut(); navigate("/blog"); }}
              className="text-[11px] text-[#777] tracking-[0.1em] uppercase hover:text-[#aaa] transition-colors bg-transparent border-0 cursor-pointer p-0"
            >
              Sign out
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          {/* Title */}
          <div>
            <label className={labelClass}>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          {/* Slug */}
          <div>
            <label className={labelClass}>Slug</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[13px] text-[#777] font-mono select-none">
                /blog/
              </span>
              <input
                type="text"
                value={newSlug}
                onChange={(e) => setNewSlug(e.target.value)}
                className={`${inputClass} pl-[54px] font-mono`}
                required
              />
            </div>
            {newSlug !== post?.slug && (
              <p className="text-[11px] text-amber-600 mt-1.5">
                Changing the slug will break any existing links to this post.
              </p>
            )}
          </div>

          {/* Excerpt */}
          <div>
            <label className={labelClass}>Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Body */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={labelClass} style={{ marginBottom: 0 }}>Body</label>
              <div className="flex border border-[#1f1f1f] rounded overflow-hidden">
                {(["write", "preview"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`text-[10px] tracking-[0.08em] uppercase px-3 py-1.5 transition-colors duration-200 ${
                      tab === t
                        ? "bg-[#1f1f1f] text-[#d4d4d4]"
                        : "bg-transparent text-[#777] hover:text-[#888]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {tab === "write" ? (
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={18}
                className={`${inputClass} resize-y font-mono text-[13px] leading-relaxed`}
                required
              />
            ) : (
              <div className="min-h-[320px] bg-[#0d0d0d] border border-[#1f1f1f] rounded px-4 py-3">
                {body ? (
                  <ReactMarkdown
                    components={{
                      h2: ({ children }) => (
                        <h2 className="text-[18px] font-semibold text-[#d4d4d4] mt-8 mb-3">{children}</h2>
                      ),
                      p: ({ children }) => (
                        <p className="text-[14px] text-[#888] leading-[1.8] mb-5">{children}</p>
                      ),
                      code: ({ children }) => (
                        <code className="text-[12px] text-[#aaa] bg-[#141414] border border-[#1f1f1f] px-1.5 py-0.5 rounded font-mono">
                          {children}
                        </code>
                      ),
                      strong: ({ children }) => (
                        <strong className="text-[#c4c4c4] font-semibold">{children}</strong>
                      ),
                    }}
                  >
                    {body}
                  </ReactMarkdown>
                ) : (
                  <p className="text-[13px] text-[#666]">Nothing to preview yet.</p>
                )}
              </div>
            )}
          </div>

          {/* Tags */}
          <div>
            <label className={labelClass}>Tags</label>
            <div className="flex flex-wrap gap-2 bg-[#0d0d0d] border border-[#1f1f1f] rounded px-3 py-2.5 focus-within:border-[#444] transition-colors duration-200">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-[11px] text-[#888] bg-[#1a1a1a] border border-[#2a2a2a] px-2 py-0.5 rounded"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-[#888] hover:text-[#aaa] transition-colors leading-none"
                    aria-label={`Remove ${tag}`}
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={onTagKeyDown}
                onBlur={() => tagInput.trim() && addTag(tagInput)}
                placeholder={tags.length === 0 ? "Type a tag, press Enter or comma" : ""}
                className="flex-1 min-w-[140px] bg-transparent text-[13px] text-[#d4d4d4] placeholder-[#555] focus:outline-none"
              />
            </div>
          </div>

          {error && <p className="text-[13px] text-red-500">{error}</p>}

          {/* Draft toggle + Submit */}
          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <div
                onClick={() => setDraft((d) => !d)}
                className={`relative w-9 h-5 rounded-full transition-colors duration-200 ${
                  draft ? "bg-[#2a2a2a]" : "bg-[#3B6D11]"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                    draft ? "translate-x-0" : "translate-x-4"
                  }`}
                />
              </div>
              <span className="text-[12px] text-[#888]">
                {draft ? "Save as draft" : "Publish now"}
              </span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="bg-white text-[#0a0a0a] text-[12px] font-medium px-6 py-2.5 rounded tracking-[0.04em] hover:bg-neutral-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Saving..." : draft ? "Save draft" : "Save & publish"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
