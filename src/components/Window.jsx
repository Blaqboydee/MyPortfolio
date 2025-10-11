import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Window({
  title,
  icon: Icon,
  onClose,
  children,
  zIndex = 50,
  onFocus,
  toggleTheme,
  isDark = false,
}) {
  const [position, setPosition] = React.useState({ x: 120, y: 80 });
  const [isMobile, setIsMobile] = React.useState(false);
  const [isMaximized, setIsMaximized] = React.useState(false);

  React.useEffect(() => {
    // Add global style for custom scrollbar
    const style = document.createElement('style');
    style.textContent = `
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: ${isDark ? '#171717' : '#f5f5f5'};
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: ${isDark ? '#404040' : '#d4d4d4'};
        border-radius: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: ${isDark ? '#525252' : '#a3a3a3'};
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [isDark]);

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        setPosition({
          x: Math.random() * 200 + 100,
          y: Math.random() * 100 + 50,
        });
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optional: lock body scroll while mobile window is open
  React.useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isMobile]);

  return (
    <>
      {/* Mobile Drawer / App View */}
      <AnimatePresence>
        {isMobile && (
          <motion.div
            key="mobile-window"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={`fixed inset-0 ${
              isDark ? "bg-neutral-900" : "bg-white"
            } z-50 flex flex-col`}
            style={{ zIndex }}
            aria-modal="true"
            role="dialog"
          >
            {/* Mobile App Header */}
            <div
              className={`${
                isDark ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-200"
              } border-b px-4 py-3 flex items-center justify-between sticky top-0 z-10`}
            >
              <button
                onClick={onClose}
                className={`p-2 -ml-2 rounded-lg ${
                  isDark ? "hover:bg-neutral-800" : "hover:bg-neutral-100"
                } transition-colors`}
                aria-label="Back"
              >
                <ChevronLeft size={24} className={isDark ? "text-white" : "text-black"} />
              </button>

              <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 pointer-events-none">
                {Icon && <Icon size={20} className={isDark ? "text-white" : "text-black"} />}
                <span className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>{title}</span>
              </div>

              <div className="flex items-center gap-2 ml-48">
                <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              </div>
            </div>

            {/* Mobile App Content */}
            <div
              className={`flex-1 overflow-auto ${isDark ? "text-neutral-200" : "text-neutral-800"} px-4 py-4`}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop OS Window View */}
      {!isMobile && (
        <motion.div
          key="desktop-window"
          drag
          dragMomentum={false}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`absolute ${isDark ? "bg-neutral-900" : "bg-white"} shadow-2xl rounded-lg overflow-hidden`}
          style={{
            top: isMaximized ? "0" : `${position.y}px`,
            left: isMaximized ? "0" : `${position.x}px`,
            width: isMaximized ? "100vw" : "500px",
            maxHeight: isMaximized ? "100vh" : "600px",
            height: isMaximized ? "100vh" : "auto",
            zIndex,
          }}
          onMouseDown={onFocus}
          role="dialog"
          aria-label={title}
        >
          <div
            className={`flex justify-between items-center ${
              isDark ? "bg-black" : "bg-neutral-200"
            } px-4 py-3 cursor-move border-b ${isDark ? "border-neutral-800" : "border-neutral-300"}`}
          >
            <div className="flex items-center gap-2">
              {Icon && <Icon size={16} className={isDark ? "text-white" : "text-black"} />}
              <span className={`font-semibold text-sm ${isDark ? "text-white" : "text-black"}`}>{title}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                aria-label="Close"
                title="Close"
              />
              <button
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
                aria-label="Minimize"
                title="Minimize"
              />
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                aria-label="Maximize"
                title="Maximize"
              />
            </div>
          </div>

          <div 
            className={`${isMaximized ? "p-12 max-w-4xl mx-auto" : "p-6"} overflow-auto custom-scrollbar ${isDark ? "text-neutral-200" : "text-neutral-800"}`} 
            style={{ 
              maxHeight: isMaximized ? "calc(100vh - 57px)" : "540px",
              scrollbarWidth: "thin",
              scrollbarColor: isDark ? "#404040 #171717" : "#d4d4d4 #f5f5f5"
            }}
          >
            {children}
          </div>
        </motion.div>
      )}
    </>
  );
}