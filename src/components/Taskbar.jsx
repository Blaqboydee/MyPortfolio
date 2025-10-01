import React from 'react'
import useTheme from '../Hooks/useTheme';
import { Moon, Sun, Mail, User, Folder, Code, Briefcase, FileText } from "lucide-react";

const Taskbar = ({isDark, toggleTheme}) => {

const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
    
  return (
      <div className={`absolute bottom-0 left-0 right-0 ${isDark ? 'bg-black border-neutral-800' : 'bg-white border-neutral-300'} border-t px-4 py-3 flex justify-between items-center z-50`}>
        <div className="flex items-center gap-2">
          <div className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>Dee OS</div>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${isDark ? 'bg-neutral-900 hover:bg-neutral-800' : 'bg-neutral-200 hover:bg-neutral-300'} transition-colors`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-black" />}
          </button>
          
          <div className={`text-sm ${isDark ? 'text-white' : 'text-black'} font-medium`}>
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
  )
}

export default Taskbar