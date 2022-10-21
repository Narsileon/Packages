import { usePage } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { upperCase } from "lodash";
import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";
import DropdownItem from "@/Components/Elements/Dropdowns/DropdownItem";
import Flag from "@/Shared/Svg/Flag";

export default function LocaleDropdown() {
    const { locale, availableLocales} = usePage().props.localization;

    return (
        <Dropdown trigger={ upperCase(locale) }>
            <div>
                {
                    availableLocales.map(availableLocale => {
                        return (
                            <DropdownItem
                                href={ `/locales/${availableLocale}` } 
                                className={ `selectable-item ${ availableLocale == locale ? "selectable-active" : "" }` }
                                type="link"
                                key={ availableLocale }
                            >
                                <div className="flex items-center space-x-2">
                                    <Flag 
                                        name={ availableLocale } 
                                        className="w-6 h-6" 
                                    />
                                    <span>
                                        { t(`languages.${ availableLocale }`) } 
                                    </span>             
                                </div>
                            </DropdownItem>
                        );
                    })
                }
            </div>          
        </Dropdown>
    );
}
