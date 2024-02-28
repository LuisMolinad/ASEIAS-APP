import { useState, useEffect } from "react";

function ThemeToggleButton() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <button
            className="bg-slate-200 h-7 w-7 rounded-full dark:hover:bg-slate-400 dark:bg-gray-700 hover:bg-slate-300 text-gray-800 dark:text-white-200"
            onClick={handleChangeTheme}
        >
            <i className="far fa-moon dark:text-white"></i>
        </button>
    );
}

export default ThemeToggleButton;
