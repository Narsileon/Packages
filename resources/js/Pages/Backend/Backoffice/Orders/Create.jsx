import { useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Create() {
	const title = trans('Create :resource', { 'resource': transChoice('common.orders', 1) });

	const { data, setData, post, processing, errors } = useForm({
        type: '',
        status: '',
    });

	return (
		<>
			<AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.create') }
				submit= { () => post('/admin/orders') }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
		</>
	);
}
