import { Dropdown } from "@/Components/Elements/Dropdowns";
import { MenuLink } from "@/Components/Elements/Menus";
import LocaleDropdown from "@/Shared/Layouts/LocaleDropdown";
import ThemeButton from "@/Shared/Layouts/ThemeButton";
import Icon from "@/Shared/Svg/Icon";

export default function Header() {
    return (
        <header className="w-full h-10 primary-background">
            <div className="flex items-center justify-end mx-2">
                <LocaleDropdown />

                <ThemeButton />

                <Dropdown
                    trigger={ <Icon name="menu" /> }
                    placement="bottom-end"
                    placementOffset={ 4 }
                >
                    <ul className="divide-y divide-color p-1">
                        <MenuLink
                            menuItem={{
                                type: 'page',
                                icon: 'user',
                                label: {
                                    value: 'common.profiles',
                                    plural: false,
                                },
                                url: 'admin.profile.index',
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
                    </ul>
                </Dropdown>
            </div>
        </header>
    );
}
