import { transChoice } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import DropZone from "./Dropzone";
import SideBarItem from "./SidebarItem";

export default function Index() {
    const items = [
        {
            id: "some input",
            type: "menu_item",
            component: {
                type: "input",
                content: "Some input"
            }
        },
        {
            id: "some name",
            type: "menu_item",
            component: {
                type: "name",
                content: "Some name"
            }
        },
        {
            id: "some email",
            type: "menu_item",
            component: {
                type: "email",
                content: "Some email"
            }
        },
        {
            id: "some phone",
            type: "menu_item",
            component: {
                type: "phone",
                content: "Some phone"
            }
        },
        {
            id: "some image",
            type: "menu_item",
            component: {
                type: "image",
                content: "Some image"
            }
        }
    ];

    return (
        <>
        	<AppHead title={ transChoice('common.menus', 2) } />

            <div className="body">
                <div className="sideBar">
                    {Object.values(items).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} />
                    ))}
                </div>
                <div>
                <DropZone
                    onDrop={handleDrop}
                    isLast
                />
                </div>
            </div>
        </>
    );
}
