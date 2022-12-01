import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Create({
	icons,
}) {
	const title = trans('Creating a new menu item:');

	const { data, setData, post, processing, errors } = useForm({
        label: '',
        url: '',
		active: '',
    });

	return (
		<>
			<AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.create') }
				submit= { () => post('/admin/menu_items') }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
				icons={ icons }
			/>
		</>
	);
}
