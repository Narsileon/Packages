import { usePage } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import { upperCase } from "lodash";
import { Dropdown, ItemLink } from "@/Components/Elements/Dropdowns";
import Flag from "@/Shared/Svg/Flag";

export default function LocaleDropdown() {
    const { locale, locales } = usePage().props.shared.localization;

    return (
        <Dropdown label={ upperCase(locale) }>
            <ul className="m-1 p-1 space-y-1">
                {
                    locales.map(availableLocale => {
                        return (
                            <ItemLink
                                href={ `/locales/${availableLocale}` }
                                key={ availableLocale }
                            >
                                <div className="flex items-center space-x-2">
                                    <Flag
                                        name={ availableLocale }
                                        className="w-6 h-6"
                                    />
                                    <span>
                                        { trans(`locales.${ availableLocale }`) }
                                    </span>
                                </div>
                            </ItemLink>
                        );
                    })
                }
            </ul>
        </Dropdown>
    );
}
