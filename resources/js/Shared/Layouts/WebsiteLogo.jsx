import { Link } from "@inertiajs/inertia-react";
import Logo from "@/Shared/Svg/Logo";

export default function WebsiteLogo() {
    return (
        <Link 
            href={ route('home') }
            className="flex items-center space-x-2"
        >
            <Logo 
                name="github" 
                className="w-8 h-8" 
            />
            <h1 className="whitespace-nowrap font-bold text-xl">
                Narsil Studio
            </h1>                
        </Link>
    );
}
