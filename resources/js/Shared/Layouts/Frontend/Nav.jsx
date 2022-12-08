import { useRef } from "react";
import { useClickAway, useToggle } from "react-use";
import { usePage } from "@inertiajs/inertia-react";
import { MenuLink } from "@/Components/Elements/Menus";
import CloseButton from "@/Components/Elements/Buttons/CloseButton";
import MenuButton from "@/Components/Elements/Buttons/MenuButton";

export default function Nav() {
    const shared = usePage().props.shared;

    const auth = shared.auth;
    const menuLinks = shared.menus.frontendHeader

    const dropdown = useRef();

    const [open, setOpen] = useToggle(false);

    useClickAway(dropdown, function() {
        if (open) {
            setOpen(false)
        }
    }, ['mouseup']);

    return (
        <nav className="flex items-center font-semibold">
            <MenuButton
                className="md:hidden"
                onClick={ setOpen }
            />

            <ul className={ `md:flex md:items-center md:justify-between primary-background p-2 space-y-2 md:space-y-0 md:space-x-2 ${ open ? "absolute md:relative md:w-auto w-full md:h-12 h-screen top-0 left-0 z-40" : "hidden" }` }>
                {
                    menuLinks.map((menuItem, index) => {
                        return (
                            <MenuLink
                                menuItem={ menuItem.data }
                                key={ index }
                            />
                        );
                    })
                }

                <li className="md:relative grid">
                    <MenuButton
                        className="hidden md:block"
                        onClick={ setOpen }
                    />

                    <CloseButton
                        className="absolute top-4 right-4 w-6 h-6 md:hidden"
                        onClick={ () => setOpen(false) }
                    />

                    <ul
                        className={ `${ open ? "md:absolute relative md:primary-background md:border-2 md:p-2 md:border-color md:top-8 md:right-0 space-y-2 z-40 rounded" : "md:hidden" }` }
                        ref={ dropdown }
                    >
                        {
                            auth ? (
                                <>
                                    <MenuLink
                                        menuItem={{
                                            type: 'page',
                                            icon: 'chart',
                                            label: {
                                                value: 'common.dashboard',
                                                plural: false,
                                            },
                                            url: 'admin.dashboard',
                                            permissions: [{
                                                name: 'backend_view'
                                            }],
                                        }}
                                    />
                                    <MenuLink
                                        menuItem={{
                                            type: 'page',
                                            icon: 'logout',
                                            label: {
                                                value: 'common.logout',
                                                plural: false,
                                            },
                                            url: 'logout',
                                        }}
                                        method="post"
                                        as="button"
                                    />
                                </>
                            ) : (
                                <>
                                    <MenuLink
                                        menuItem={{
                                            type: 'page',
                                            icon: 'user-plus',
                                            label: {
                                                value: 'common.register',
                                                plural: false,
                                            },
                                            url: 'register',
                                        }}
                                    />
                                    <MenuLink
                                        menuItem={{
                                            type: 'page',
                                            icon: 'login',
                                            label: {
                                                value: 'common.login',
                                                plural: false,
                                            },
                                            url: 'login',
                                        }}
                                    />
                                </>
                            )
                        }
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
