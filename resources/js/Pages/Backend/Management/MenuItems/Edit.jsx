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
		slug: menuItem.slug,
		type: menuItem.type,
		icon: menuItem.icon,
		label: menuItem.label,
        url: menuItem.url,
    });

    return (
        <>
            <AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.update') }
				submit= { () => patch(route('admin.menu_items.update'), menuItem.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
				icons={ icons }
			/>
        </>
    );
}
