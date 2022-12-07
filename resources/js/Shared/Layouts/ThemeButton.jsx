import { useMount, useToggle, useUpdateEffect } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import Icon from "@/Shared/Svg/Icon";

export default function ThemeButton() {
    const auth = usePage().props.shared.auth

    if (auth) {
        return (
            <AuthThemeButton auth={ auth } />
        );
    } else {
        return (
            <GuestThemeButton />
        );
    }
}

const GuestThemeButton = ({ }) => {
    const hasValue = () => localStorage.hasOwnProperty("darkMode");
	const getValue = () => localStorage.getItem("darkMode");
	const storeValue = () => localStorage.setItem("darkMode", dark);

    const [dark, setDark] = useToggle(hasValue() && getValue() == "true" ? true : false);

    useMount(() => {
        applyValue(dark);
    })

    useUpdateEffect(() => {
        applyValue(dark);

        storeValue();

        return () => {
            document.body.classList.remove("dark");
        };
    });

    function applyValue(dark) {
        if (dark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }

    return (
        <button
            type="button"
            className="selectable p-2 rounded-lg"
            onClick={ setDark }
        >
            <Icon name={ dark ? 'sun' : 'moon' } />
        </button>
    );
}

const AuthThemeButton = ({ auth }) => {
    useMount(() => {
        applyValue(auth.settings.data.dark);
    })

    useUpdateEffect(() => {
        applyValue(auth.settings.data.dark);

        return () => {
            document.body.classList.remove("dark");
        };
    });

    function applyValue(dark) {
        if (dark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }

    function onClick() {
        Inertia.patch(route('user_settings.update', auth.settings.data.id), {
            dark: !auth.settings.data.dark,
        })
    }

    return (
        <button
            type="button"
            className="selectable p-2 rounded-lg"
            onClick={ onClick }
        >
            <Icon name={ auth.settings.dark ? 'sun' : 'moon' } />
        </button>
    );
}
