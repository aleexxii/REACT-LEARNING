import { Moon, Sun  } from "lucide-react";
import useTheme from "../context/ThemeContext";

const ThemeBtn = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChangeBtn = (e) => {
    const themeStatus = e.currentTarget.checked;
    if (themeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div
        className={`w-16 h-8  rounded-full peer-focus:ring-4 peer-focus:ring-gray-400 ${
          themeMode == "dark" ? "dark:bg-blue-950" : "dark:bg-gray-100"
        }`}
      >
        <Sun
          size={18}
          className={`absolute fill-yellow-400 top-2 left-2 text-orange-400 transition-opacity duration-300 ${
            themeMode == "dark" ? "opacity-100" : "opacity-0"
          }`}
        />

        <Moon
          size={18}
          className={`text-gray-500 dark:text-indigo-500 absolute top-2 right-2 fill-gray-300
             transition-opacity duration-300 ${
               themeMode == "light" ? "opacity-100" : "opacity-0"
             }`}
        />
      </div>
      <div
        className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white border border-gray-300 rounded-full transition-transform duration-300 transform ${
          themeMode == "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
    </label>
  );
};

export default ThemeBtn;
