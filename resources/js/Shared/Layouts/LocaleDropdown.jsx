import { Link, usePage } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { upperCase } from "lodash";
import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";
import Flag from "@/Shared/Svg/Flag";

export default function LocaleDropdown() {
    const { locale, availableLocales} = usePage().props.localization;

    return (
        <Dropdown 
            trigger={ upperCase(locale) }
        >
            <div>
                {
                    availableLocales.map(availableLocale => {
                        return (
                            <li 
                                className="m-1"
                                key={ availableLocale }
                            >
                                <Link
                                    href={ `/locales/${availableLocale}` } 
                                    className={ `selectable-item ${ availableLocale == locale ? "selectable-active" : "" }` }
                                >
                                    <div className="flex items-center space-x-2">
                                        <Flag 
                                            name={ availableLocale } 
                                            className="w-6 h-6" 
                                        />
                                        <span>
                                            { t(availableLocale) } 
                                        </span>             
                                    </div>
                                </Link>
                            </li>
                        );
                    })
                }
            </div>          
        </Dropdown>
    );
}
