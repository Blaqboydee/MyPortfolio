import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function BlogNew() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugEdited, setSlugEdited] = useState(false);
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [draft, setDraft] = useState(true);
  const [tab, setTab] = useState<"write" | "preview">("write");

  // auto-generate slug from title unless user has manually edited it
  useEffect(() => {
    if (!slugEdited) setSlug(slugify(title));
  }, [title, slugEdited]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // wiring to Supabase comes next
    console.log({ title, slug, excerpt, body, tags, draft });
  };

  const inputClass =
    "w-full bg-[#0d0d0d] border border-[#1f1f1f] rounded px-4 py-3 text-[14px] text-[#d4d4d4] placeholder-[#555] focus:outline-none focus:border-[#444] transition-colors duration-200";

  const labelClass = "block text-[11px] text-[#888] tracking-[0.1em] uppercase mb-2";

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <main className="px-5 sm:px-8 md:px-10 pt-32 pb-24 max-w-[800px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[11px] text-[#888] tracking-[0.14em] uppercase font-mono mb-1">
              New post
            </p>
            <h1 className="text-[28px] font-bold text-white tracking-[-0.02em]">
              Write
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
              placeholder="What's this post about?"
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
                value={slug}
                onChange={(e) => {
                  setSlugEdited(true);
                  setSlug(e.target.value);
                }}
                placeholder="post-slug"
                className={`${inputClass} pl-[54px] font-mono`}
                required
              />
            </div>
            {!slugEdited && title && (
              <p className="text-[11px] text-[#777] mt-1.5">
                Auto-generated from title. Click to edit.
              </p>
            )}
          </div>

          {/* Excerpt */}
          <div>
            <label className={labelClass}>Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="One or two sentences shown on the blog listing."
              rows={2}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Body */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={labelClass} style={{ marginBottom: 0 }}>Body</label>
              <div className="flex gap-0 border border-[#1f1f1f] rounded overflow-hidden">
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
                placeholder={`Write in markdown.\n\n## Section heading\n\nParagraph text here...`}
                rows={18}
                className={`${inputClass} resize-y font-mono text-[13px] leading-relaxed`}
                required
              />
            ) : (
              <div className="min-h-[320px] bg-[#0d0d0d] border border-[#1f1f1f] rounded px-4 py-3">
                {body ? (
                  <div className="prose-preview">
                    <ReactMarkdown
                      components={{
                        h2: ({ children }) => (
                          <h2 className="text-[18px] font-semibold text-[#d4d4d4] mt-8 mb-3">
                            {children}
                          </h2>
                        ),
                        p: ({ children }) => (
                          <p className="text-[14px] text-[#888] leading-[1.8] mb-5">
                            {children}
                          </p>
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
                  </div>
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
              className="bg-white text-[#0a0a0a] text-[12px] font-medium px-6 py-2.5 rounded tracking-[0.04em] hover:bg-neutral-100 transition-colors duration-200"
            >
              {draft ? "Save draft" : "Publish"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
