import { useState } from "react";
import { useMount, useUpdateEffect } from "react-use";
import Theme from "./Svg/Icons/Theme";

export default function ThemeButton() {
    const hasValue = () => localStorage.hasOwnProperty("darkMode");
	const getValue = () => localStorage.getItem("darkMode");
	const storeValue = () => localStorage.setItem("darkMode", isDark);

    const applyValue = () => isDark == true ? document.body.classList.add("dark") : document.body.classList.remove("dark");

    let [isDark, toggle] = useState(hasValue() ? getValue() == "true" ? true : false : false);

    useMount(() => {
        applyValue();
    })

    useUpdateEffect(() => {
        applyValue();
        storeValue();

        return () => {
            document.body.classList.remove("dark");
        };
    });

    return (
        <button 
            type="button" 
            className={
                "p-2 rounded-lg"
                + " hover:bg-gray-500"
            }
            onClick={ () => toggle(isDark = !isDark) }
        >   
            <Theme 
                className="w-6 h-6"
                theme={ isDark ? "dark" : "light" }
            />
        </button>
    );
}
