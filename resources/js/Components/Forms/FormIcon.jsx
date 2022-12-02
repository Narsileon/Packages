import { useDropdown } from "@/narsil-react";
import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { DropdownItem, DropdownPanel } from "@/Components/Elements/Dropdowns";
import { FormError, FormLabel } from ".";
import Chevron from "@/Shared/Svg/Chevron";
import Icon from "@/Shared/Svg/Icon";

export default function FormIcon({
    label,
    value,
    error,
    setData,
}) {
    const[dropdown, open, setOpen] = useDropdown(false, true);

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

    return (
        <div>
            <FormLabel label={ label } />

            <div ref={ dropdown }>
                <button
                    className="field flex items-center justify-between w-full"
                    onClick={ (event) => {
                        event.preventDefault();
                        setOpen();
                    }}
                >
                    <span>
                        { icons.includes(value) ? <Icon name={ value } /> : upperFirst(transChoice('common.icons', 1)) }
                    </span>

                    <Chevron
                        className="w-4 h-4"
                        direction={ open ? "down" : "left" }
                    />
                </button>

                {
                    open ? (
                        <DropdownPanel className="max-w-fit">
                            <div className="divide-y divide-color h-64 overflow-y-auto">
                                {
                                    icons.map((name) => {
                                        return (
                                            <DropdownItem
                                                className="w-full"
                                                onClick={ (event) => {
                                                    event.preventDefault();
                                                    setData('icon', name);
                                                }}
                                                key={ name }
                                            >
                                                <div className="flex items-center justify-between p-1 space-x-1">
                                                    <span>
                                                        { upperFirst(name) }
                                                    </span>
                                                    <Icon name={ name } />
                                                </div>
                                            </DropdownItem>
                                        );
                                    })
                                }
                            </div>
                        </DropdownPanel>
                    ) : null
                }
            </div>

            <FormError error={ error } />
        </div>
    );
}
