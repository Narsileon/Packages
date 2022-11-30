import { useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Formular from "./Formular";

export default function Edit({ menuItem }) {
	const title = trans('Edit :resource', { 'resource': transChoice('common.menu_items', 1) });

    const { data, setData, patch, processing, errors } = useForm({
        label: menuItem.label,
        url: menuItem.url,
    });

    return (
        <>
			<Formular
				title= { title }
				label= { trans('common.update') }
				submit= { () => patch('/admin/menu_items/' + menuItem.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
        </>
    );
}
