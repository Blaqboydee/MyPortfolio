import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Mail, User, Folder, Code, Briefcase, FileText } from "lucide-react";

const Taskbar = ({ isDark, toggleTheme }) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
    
  return (
    <div className={`fixed bottom-0 left-0 right-0 ${isDark ? 'bg-black border-neutral-800' : 'bg-white border-neutral-300'} border-t px-4 py-3 flex justify-between items-center z-50`}>
      <div className="flex items-center gap-2">
        <div className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>DeeOS</div>
      </div>
      
      <div className="flex items-center gap-4">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        <div className={`text-sm ${isDark ? 'text-white' : 'text-black'} font-medium`}>
          {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;