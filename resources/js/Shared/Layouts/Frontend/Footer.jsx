import { Link, usePage } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import { MenuLink } from "@/Components/Elements/Menus";
import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";

export default function Footer() {
    const menuItems = usePage().props.shared.menus.frontendFooter;

    const iconItems = [
        { url: '#', icon: 'github' },
        { url: '#', icon: 'facebook' },
        { url: '#', icon: 'instagram' },
        { url: '#', icon: 'twitter' },
    ];

    return (
        <footer className="primary-background border-t-2 border-color w-full p-4 space-y-4 text-sm">
            <section id="upper-header">
                <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
                    <div className="col-span-1">
                        <div className="flex items-center justify-center md:justify-start">
                            <WebsiteLogo />
                        </div>
                    </div>

                    <div className="col-span-1">
                        <ul className="flex items-center justify-center h-full md:justify-end">
                            {
                                menuItems.map((menuItem, index) => {
                                    return (
                                        <MenuLink
                                            className="hover:underline"
                                            menuItem={ menuItem.data }
                                            key={ index }
                                        />
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <hr className="border-color" />

            <section id="lower-header">
                <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
                    <div className="col-span-1 md:order-2">
                        <ul className="flex items-center justify-center md:justify-end">
                            {
                                iconItems.map((iconItem, index) => {
                                    return (
                                        <MenuLink
                                            menuItem={ iconItem }
                                            key={ index }
                                        />
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="col-span-1 md:order-1">
                        <div className="flex items-center justify-center md:justify-start">
                            <p className="md:flex space-x-1 text-center">
                                <span className="block whitespace-nowrap">
                                    © 2022 <Link href={ route('home') } className="hover:underline">Narsil Studio™</Link>.
                                </span>
                                <span className="block whitespace-nowrap">
                                    { trans('All rights reserved.') }
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
