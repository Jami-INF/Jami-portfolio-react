import { useState, useEffect } from "react";

export default function useDarkSide() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        if(theme !== localStorage.theme){
            window.postMessage({ theme: theme }, "*");
            localStorage.setItem('theme', theme);
        }


    }, [theme, colorTheme]);

    return [colorTheme, setTheme]
}