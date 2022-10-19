import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";
import t from "@/localization";
import Flag from "@/Shared/Svg/Flag";
import { Link, usePage } from "@inertiajs/inertia-react";

export default function LocaleDropdown() {
    const props = usePage().props;

    let locale = props.localization.locale;
    let availableLocales = props.localization.availableLocales;

    return (
        <Dropdown trigger={ t(locale) }>
            <div>
                {
                    Object.entries(availableLocales).map(([key, value]) => {
                        return (
                            <li key={ value }>
                                <Link
                                    href={ `/locales/${value}` } 
                                    className={
                                        "block w-full p-2 whitespace-nowrap text-left" 
                                        + " hover:bg-gray-300 hover:text-blue-500" 
                                        + " dark:hover:bg-gray-600" 
                                    }
                                >
                                    <div className="flex items-center space-x-2">
                                        <Flag name={ value } className="w-6 h-6" />
                                        <span>
                                            { key } 
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
