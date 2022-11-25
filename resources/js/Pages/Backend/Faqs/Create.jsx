import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Formular from "./Formular";
import AppHead from "@/Shared/AppHead";

export default function Create() {
	const title = trans('Create :resource', { 'resource': trans('FAQ') });

	const { data, setData, post, processing, errors } = useForm({
        question: '',
        answer: '',
    });

	return (
		<>
			<AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.create') }
				submit= { () => post('/admin/faqs') }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
		</>
	);
}
