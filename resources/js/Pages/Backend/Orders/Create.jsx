import { Head, useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Formular from "./Formular";

export default function Create() {
	const title = trans('Create :resource', { 'resource': transChoice('common.orders', 1) });

	const { data, setData, post, processing, errors } = useForm({
        type: '',
        status: '',
    });

	return (
		<>
			<Head title={ title } />

			<Formular
				title= { title }
				label= { trans('Create') }
				submit= { () => post('/admin/orders') }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
		</>
	);
}
