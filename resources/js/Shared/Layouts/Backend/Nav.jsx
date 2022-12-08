import { usePage } from "@inertiajs/inertia-react";
import { MenuCategory, MenuLink } from "@/Components/Elements/Menus";

export default function Nav() {
    const menuItems = usePage().props.shared.menus.backendMenu;

    return (
        <nav className="font-semibold">
            <ul>
                {
                    menuItems.map((menuItem, index) => {
                        return (
                            menuItem.data.type == 'category' ? (
                                <MenuCategory
                                    menuItem={ menuItem.data }
                                    key={ index }
                                >
                                    {
                                        menuItem.data.children.map((menuItem, index) => {
                                            return (
                                                <MenuLink
                                                    menuItem={ menuItem }
                                                    key={ index }
                                                />
                                            );
                                        })
                                    }
                                </MenuCategory>
                            ) : (
                                <MenuLink
                                    menuItem={ menuItem.data }
                                    key={ index }
                                />
                            )
                        )
                    })
                }
            </ul>
        </nav>
    );
}
