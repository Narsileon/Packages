import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import Formular from "./Formular";

export default function Create() {
	const title = t('Create :resource', { 'resource': t('FAQ') });

	const { data, setData, post, processing, errors } = useForm({
        question: '',
        answer: '',
    });

	return (
		<>
			<Head title={ title } />

			<Formular
				title= { title }
				label= { t('Create') }
				submit= { () => post('/backoffice/faqs') }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
		</>
	);
}
