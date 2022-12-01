import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Edit({
	menuItem,
	icons,
}) {
	const title = trans('Editing the menu item:');

    const { data, setData, patch, processing, errors } = useForm({
        label: menuItem.label,
        url: menuItem.url,
		active: menuItem.active,
    });

    return (
        <>
            <AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.update') }
				submit= { () => patch('/admin/menu_items/' + menuItem.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
				icons={ icons }
			/>
        </>
    );
}
