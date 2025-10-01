import React from "react";

export default function DesktopIcon({ label, icon: Icon, onClick, isDark }) {
  const [clicks, setClicks] = React.useState(0);
  const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    setClicks(c => c + 1);
    setSelected(true);
    
    setTimeout(() => {
      if (clicks === 0) {
        setSelected(false);
      }
    }, 300);

    setTimeout(() => setClicks(0), 300);
  };

  React.useEffect(() => {
    if (clicks === 1) {
      onClick();
      setClicks(0);
      setSelected(false);
    }
  }, [clicks, onClick]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center cursor-pointer group transition-all p-3 rounded-lg ${
        selected ? (isDark ? 'bg-neutral-800 bg-opacity-50' : 'bg-neutral-200 bg-opacity-50') : ''
      }`}
    >
      <div className={`w-16 h-16 ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'} rounded-xl mb-2 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
        <Icon size={32} className={isDark ? 'text-white' : 'text-black'} />
      </div>
      <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-black'} text-center`}>{label}</span>
    </div>
  );
}