import { Link, usePage } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";
import Icon from "@/Shared/Svg/Icon";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="primary-background border-t-2 border-color w-full p-4 space-y-4 text-sm">
                <UpperFooter />

                <hr className="border-color" />

                <LowerFooter />
            </div>
        </footer>
    );
}

const UpperFooter = () => {
    const menuItems = usePage().props.shared.settings.menus.frontend_footer

    return (
        <section id="upper-header">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
                <div className="col-span-1">
                    <div className="flex items-center justify-center md:justify-start">
                        <WebsiteLogo />
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="flex items-center justify-center h-full md:justify-end space-x-4">
                        {
                            menuItems.map((item, index) => {
                                return (
                                    <Link
                                        className="hover:underline"
                                        href={ item.url }
                                        key={ index }
                                    >
                                        { transChoice(item.label, 1) }
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

const LowerFooter = () => {
    const menuItems = [
        { route: '#', name: 'github' },
        { route: '#', name: 'facebook' },
        { route: '#', name: 'instagram' },
        { route: '#', name: 'twitter' },
    ];

    return (
        <section id="lower-header">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
                <div className="col-span-1 md:order-2">
                    <div className="flex items-center justify-center md:justify-end space-x-4">
                        {
                            menuItems.map(({ route, name }) => {
                                return (
                                    <Link
                                        className="link-icon"
                                        href={ route }
                                        key={ name }
                                    >
                                        <Icon name={ name } />
                                    </Link>
                                );
                            })
                        }
                    </div>
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
    );
}
