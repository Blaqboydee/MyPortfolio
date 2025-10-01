import React from "react";

export default function useTheme() {
  const [isDark, setIsDark] = React.useState(true);
  const toggleTheme = () => setIsDark(!isDark);
  return { isDark, toggleTheme };
}