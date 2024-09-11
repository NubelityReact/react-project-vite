import { useCallback, useEffect, useState } from "react";

export const breakpoints = {
  desktop: "1440px",
  tablet: "768px",
  mobile: "375px",
};

const useViewportMatchSize = (breakpoint) => {
  const [match, setMatch] = useState(false);

  const isMatchingViewport = useCallback(() => {
    setMatch(window.innerWidth >= Number(breakpoints[breakpoint].slice(0, -2)));
  }, [breakpoint]);

  useEffect(() => {
    window.addEventListener("resize", isMatchingViewport);
    isMatchingViewport();
    return () => window.removeEventListener("resize", isMatchingViewport);
  }, [isMatchingViewport]);

  return { match };
};

export default useViewportMatchSize;
