import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { FormError, FormLabel } from ".";
import Dropdown from "@/Components/Elements/Dropdowns/Dropdown";
import Chevron from "@/Shared/Svg/Chevron";
import Icon from "@/Shared/Svg/Icon";

export default function FormIcon({
    label,
    value,
    error,
    setData,
}) {
    const icons = [
        'arrows_in',
        'arrows_out',
        'book',
        'calendar',
        'chart',
        'check',
        'clipboard',
        'cog',
        'danger',
        'download',
        'ellipsis-horizontal',
        'ellipsis-vertical',
        'envelope',
        'facebook',
        'folder',
        'github',
        'grid',
        'group',
        'home',
        'identification',
        'information',
        'instagram',
        'language',
        'link',
        'list',
        'login',
        'logout',
        'menu',
        'moon',
        'office',
        'pencil',
        'plus',
        'printer',
        'qr-code',
        'question',
        'search',
        'sun',
        'table',
        'template',
        'trash',
        'truck',
        'twitter',
        'upload',
        'user',
        'user-plus',
        'users',
        'x',
    ];

    const DropdownTrigger = () => {
        return (
            <span>
                { icons.includes(value) ? <Icon name={ value } /> : upperFirst(transChoice('common.icons', 1)) }
            </span>
        );
    }

    return (
        <div>
            <FormLabel label={ label } />

            <Dropdown
                trigger={ icons.includes(value) ? <Icon name={ value } /> : upperFirst(transChoice('common.icons', 1)) }
                triggerClasses="field"
                floatingOptions={{
                    placement: 'bottom',
                    middleware: [offset(2)],
                }}
            >
                <ul className="divide-y divide-color h-64 overflow-y-auto">
                    {
                        icons.map((name) => {
                            return (
                                <li
                                    className="w-full"
                                    key={ name }
                                >
                                    <button
                                        className="flex items-center justify-between p-1 space-x-1"
                                        onClick={ (event) => {
                                            event.preventDefault();
                                            setData('icon', name);
                                        }}
                                    >
                                        <span>
                                            { upperFirst(name) }
                                        </span>
                                        <Icon name={ name } />
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>
            </Dropdown>

            <FormError error={ error } />
        </div>
    );
}
