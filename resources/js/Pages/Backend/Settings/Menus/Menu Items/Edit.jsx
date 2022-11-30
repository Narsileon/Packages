import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Window from "@/Shared/Window";
import Formular from "./Formular";

export default function Edit({ menuItem, options, icons, showEdit }) {
	const title = trans('Editing the menu item:');

    const { data, setData, patch, processing, errors } = useForm({
        type: menuItem.type,
        label: menuItem.label,
        icon: menuItem.icon,
        url: menuItem.url,
    });

    return (
        <Window setVisible={ showEdit }>
            <Formular
                title= { title }
                label= { trans('common.update') }
                submit= { () => {
                    showEdit(false)
                    patch('/admin/menu_items/' + menuItem.id)
                }}
                data={ data }
                setData={ setData }
                processing={ processing }
                errors={ errors }
                options={ options }
                icons={ icons }
                setVisible={ showEdit }
            />
        </Window>
    );
}
