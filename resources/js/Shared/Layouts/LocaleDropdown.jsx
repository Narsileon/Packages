import { NavbarDropdown, NavbarDropdownButton } from "@/Layouts/Navigation/Navbar";
import Flag from "@/Shared/Svg/Flag";

export default function LocaleDropdown() {

    function setLocale(locale) {
        setLang(locale)
    }

    return (
        <NavbarDropdown name={getActiveLanguage()}>
            <div>
                <NavbarDropdownButton action={() => setLocale('en')}>
                    <div className="flex items-center space-x-2">
                        <GB />
                        <span>
                            { t('English') } 
                        </span>             
                    </div>
                </NavbarDropdownButton>
                <NavbarDropdownButton action={() => setLocale('fr')}>
                    <div className="flex items-center space-x-2">
                        <FR />
                        <span>
                            { t('French') } 
                        </span>             
                    </div>
                </NavbarDropdownButton>
                <NavbarDropdownButton action={() => setLocale('de')}>
                    <div className="flex items-center space-x-2">
                        <DE />
                        <span>
                            { t('German') } 
                        </span>             
                    </div>
                </NavbarDropdownButton>  
            </div>          
        </NavbarDropdown>
    );
}
