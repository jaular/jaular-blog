import useDarkMode from "@/hooks/useDarkMode";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export default function ButtonTheme() {
  const [switchTheme, theme, isMounted] = useDarkMode();
  {
    if (!isMounted) return null;
  }

  const textTheme =
    theme === "dark" ? (
      <SunIcon className="w-6 h-6" aria-hidden="true" />
    ) : (
      <MoonIcon className="w-6 h-6" aria-hidden="true" />
    );

  return (
    <button
      className="p-2 text-gray-700 bg-gray-300 rounded-md dark:text-gray-400 dark:bg-black-300 hover:text-black-500 dark:hover:text-white"
      onClick={() => switchTheme()}
    >
      <span className="sr-only">Theme</span>
      {textTheme}
    </button>
  );
}
