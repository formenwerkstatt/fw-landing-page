import { useTheme } from "next-themes";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full  text-black dark:text-white md:h-14 md:w-14"
    >
      {theme === "dark" ? (
        <IoSunnyOutline className="text-3xl" />
      ) : (
        <IoMoonOutline className="text-2xl" />
      )}
    </button>
  );
};

export default ThemeToggler;
