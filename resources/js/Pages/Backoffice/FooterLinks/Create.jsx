import { Head, useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Formular from "./Formular";

export default function Create() {
	const title = t('Create :resource', { 'resource':transChoice('common.footer_links', 1) });

	const { data, setData, post, processing, errors } = useForm({
        question: '',
        answer: '',
    });

	return (
		<>
			<Head title={ title } />

			<Formular
				title= { title }
				label= { trans('Create') }
				submit= { () => post('/backoffice/faqs') }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
		</>
	);
}
