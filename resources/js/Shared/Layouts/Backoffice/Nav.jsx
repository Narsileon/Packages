import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";
import ThemeButton from "@/Shared/Layouts/ThemeButton";
import NavLink from "@/Components/Navigations/NavLink";

export default function Nav() {
    return (
        <aside className="
            sticky overflow-hidden primary-background top-0 h-screen w-12 p-2 space-y-4
            hover:w-80
            transition-all duration-300
        ">
            <div className="flex items-center justify-between space-x-2">
                <WebsiteLogo />

                <div className="flex items-center">
                    <ThemeButton />
                </div>
            </div>

            <div className="px-1">
                <ul className="space-y-4">
                    <NavLink
                        label="Users"
                    />
                    <NavLink
                        label="Roles"
                    />
                </ul>
            </div>                
        </aside>
    );
}
