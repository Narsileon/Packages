import { useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Formular from "./Formular";

export default function Create() {
	const title = trans('Create :resource', { 'resource': transChoice('common.menu_items', 1) });

	const { data, setData, post, processing, errors } = useForm({
        label: '',
        url: '',
    });

	return (
		<>
			<Formular
				title= { title }
				label= { trans('common.create') }
				submit= { () => post('/admin/menu_items') }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
		</>
	);
}
