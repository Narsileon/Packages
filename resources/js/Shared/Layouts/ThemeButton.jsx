import { useState } from "react";
import { useMount, useUpdateEffect } from "react-use";
import Theme from "@/Shared/Svg/Theme";

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
                "selectable p-2 rounded-lg"
            }
            onClick={ () => toggle(isDark = !isDark) }
        >
            <Theme
                className="w-5 h-5"
                theme={ isDark ? "dark" : "light" }
            />
        </button>
    );
}
