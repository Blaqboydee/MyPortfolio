import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { personalByRegion, experienceByRegion, type Region } from "../data/portfolio";

type RegionContextValue = {
  region: Region;
  setRegion: (r: Region) => void;
  toggleRegion: () => void;
  personal: (typeof personalByRegion)[Region];
  experience: (typeof experienceByRegion)[Region];
};

const RegionContext = createContext<RegionContextValue | null>(null);

const STORAGE_KEY = "portfolio-region";

function readInitialRegion(): Region {
  if (typeof window === "undefined") return "ng";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "uk" || saved === "ng" ? saved : "ng";
}

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegionState] = useState<Region>(readInitialRegion);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, region);
  }, [region]);

  const setRegion = (r: Region) => setRegionState(r);
  const toggleRegion = () => setRegionState((r) => (r === "ng" ? "uk" : "ng"));

  return (
    <RegionContext.Provider
      value={{
        region,
        setRegion,
        toggleRegion,
        personal: personalByRegion[region],
        experience: experienceByRegion[region],
      }}
    >
      {children}
    </RegionContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRegion() {
  const ctx = useContext(RegionContext);
  if (!ctx) throw new Error("useRegion must be used within a RegionProvider");
  return ctx;
}
