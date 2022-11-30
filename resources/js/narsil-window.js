import { useRef } from "react";
import { useClickAway, useToggle } from "react-use";

export const useWindow = () => {
    const window = useRef(null);

    const [visible, setVisible] = useToggle(false);

    useClickAway(window, () => {
        setVisible(false);
    });

    return [window, visible, setVisible];
};
