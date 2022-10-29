import { Link } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";
import Logo from "@/Shared/Svg/Logo";

export default function Footer({ textLinks, iconLinks }) {
    return (
        <footer id="footer" className="primary-background border-t-2 border-color w-full p-4 space-y-4 text-sm">
            <div id="top-footer" className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
                <div className="col-span-1">
                    <div className="flex items-center justify-center md:justify-start">
                        <WebsiteLogo />
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="flex items-center justify-center h-full md:justify-end space-x-4">
                        {
                            textLinks.map(({ route, label }, index) => {
                                return (
                                    <Link
                                        className="link-text"
                                        href={ route }
                                        key={ index }
                                    >
                                        { t(label) }
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <hr className="border-color" />

            <div id="bottom-footer" className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
                <div className="col-span-1 md:order-2">
                    <div className="flex items-center justify-center md:justify-end space-x-4">
                        {
                            iconLinks.map(({ route, name }) => {
                                return (
                                    <Link
                                        className="link-icon"
                                        href={ route }
                                        key={ name }
                                    >
                                        <Logo name={ name } />
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="col-span-1 md:order-1">
                    <div className="flex items-center justify-center md:justify-start">
                        <p className="md:flex space-x-1 text-center">
                            <span className="block whitespace-nowrap">© 2022 <Link href={ route('home') } className="link-text">Narsil Studio™</Link>.</span>
                            <span className="block whitespace-nowrap">All Rights Reserved.</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}