import { useState } from "react";

/**
 * Hook to handle fullscreen mode for an element.
 * @param element The element to toggle fullscreen on.
 * @returns An object with the following properties:
 * - isFullscreen: boolean indicating whether the element is currently in fullscreen mode.
 * - enterFullscreen: function to enter fullscreen mode.
 * - exitFullscreen: function to exit fullscreen mode.
 * - toggleFullscreen: function to toggle fullscreen mode.
 */
export function useFullscreen(
  element: HTMLElement | React.RefObject<HTMLElement> = document.documentElement
) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = () => {
    if (element instanceof HTMLElement) {
      element.requestFullscreen();
    } else if (element.current) {
      element.current.requestFullscreen();
    }
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    document.exitFullscreen();
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenEnabled) return;
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  return { isFullscreen, enterFullscreen, exitFullscreen, toggleFullscreen };
}
