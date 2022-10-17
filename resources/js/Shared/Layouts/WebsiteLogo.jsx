import { Link } from "@inertiajs/inertia-react";

export default function WebsiteLogo() {
    return (
        <Link 
            href={ route('home') }
            className="flex items-center space-x-2 p-2"
        >
            <h1 className="whitespace-nowrap font-bold text-xl">
                Narsil Studio
            </h1>                
        </Link>
    );
}
