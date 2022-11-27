import React from "react";
import { useDrag } from "react-dnd";

export default function SideBarItem ({ data }) {
    const [{ opacity }, drag] = useDrag({
        type: "menu_item",
        item: data,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.4 : 1
        })
    });

    return (
        <div className="sideBarItem" ref={ drag } style={{ opacity }}>
            { data.component.type }
        </div>
    );
};
