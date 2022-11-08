import { Head, useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Formular from "./Formular";

export default function Create() {
	const title = trans('Create :resource', { 'resource':transChoice('common.header_links', 1) });

	const { data, setData, post, processing, errors } = useForm({
        label: '',
        url: '',
		active: '',
    });

	return (
		<>
			<Head title={ title } />

			<Formular
				title= { title }
				label= { trans('Create') }
				submit= { () => post('/backoffice/header_links') }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
		</>
	);
}
