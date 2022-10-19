import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";
import Flag from "@/Shared/Svg/Flag";
import { Link, usePage } from "@inertiajs/inertia-react";
import { t } from "@/localization";

export default function LocaleDropdown() {
    const props = usePage().props;

    let locale = props.localization.locale;
    let availableLocales = props.localization.availableLocales;

    return (
        <Dropdown trigger={ t(locale) }>
            <div>
                {
                    availableLocales.map(availableLocale => {
                        return (
                            <li key={ availableLocale }>
                                <a
                                    href={ `/locales/${availableLocale}` } 
                                    className={
                                        "block w-full p-2 whitespace-nowrap text-left" 
                                        + " hover:bg-gray-300 hover:text-blue-500" 
                                        + " dark:hover:bg-gray-600" 
                                    }
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
                                </a>
                            </li>
                        );
                    })
                }
            </div>          
        </Dropdown>
    );
}
