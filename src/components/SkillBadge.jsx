export default function SkillBadge({ name, isDark }) {
  return (
    <span className={`px-3 py-1 text-sm ${isDark ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-black'} rounded-full`}>
      {name}
    </span>
  );
}