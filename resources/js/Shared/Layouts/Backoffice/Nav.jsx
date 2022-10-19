import SidebarLink from "@/Components/Navigations/SidebarLink";
import ThemeButton from "@/Shared/Layouts/ThemeButton";
import WebsiteLogo from "@/Shared/Layouts/WebsiteLogo";
import Icon from "@/Shared/Svg/Icon";
import LocaleDropdown from "../LocaleDropdown";

export default function Nav() {
    return (
        <aside className="
            sticky overflow-hidden primary-background top-0 h-screen w-12 p-2 space-y-4
            hover:w-80 hover:overflow-visible
            transition-all duration-300
        ">
            <Header />

            <div>
                <ul className="space-y-4">
                    <SidebarLink
                        href={ route("backoffice.dashboard") }
                        icon={ 
                            <Icon 
                                name="dashboard"
                                className="w-6 h-6"
                            /> 
                        }
                        label="Dashboard"
                    />
                    <SidebarLink
                        href={ route("backoffice.calendar") }
                        icon={ 
                            <Icon 
                                name="calendar"
                                className="w-6 h-6"
                            /> 
                        }
                        label="Calendar"
                    />
                    <SidebarLink
                        href={ route("backoffice.users.index") }
                        icon={ 
                            <Icon 
                                name="user"
                                className="w-6 h-6"
                            /> 
                        }
                        label="Users"
                    />
                    <SidebarLink
                        href={ route("backoffice.roles.index") }
                        icon={ 
                            <Icon 
                                name="shield"
                                className="w-6 h-6"
                            /> 
                        }
                        label="Roles"
                    />
                </ul>
            </div>
            <div>
                
            </div>            
        </aside>
    );
}

const Header = () => {
    return (
        <header className="flex items-center justify-between space-x-2">
            <WebsiteLogo />

            <div className="flex items-center space-x-2">
                <LocaleDropdown />
                <ThemeButton />
            </div>
        </header>        
    )
}
