import WebsiteLogo from "@/Shared/WebsiteLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Footer() {
    return (
        <footer className="primary-background w-full p-4 border-t-2 border-gray-500 text-sm">
            <div className="flex items-center justify-between">
                <WebsiteLogo />
                <ul className="flex flex-wrap items-center space-x-4">
                    {/* Links (Texts) */}
                </ul>
            </div>
            <hr className="my-8 border-gray-500" />
            <div className="flex items-center justify-between">
                <span>
                    © 2022 <Link href={route('home')} className="hover:underline">Narsil Studio™</Link>. All Rights Reserved.
                </span>
                <div className="flex space-x-4 h-6">
                    {/* Links (Icons) */}
                </div>
            </div>
        </footer>
    );
}