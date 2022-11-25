import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Formular from "./Formular";
import AppHead from "@/Shared/AppHead";

export default function Edit({ faq }) {
	const title = trans('Edit :resource', { 'resource': trans('FAQ') });

    const { data, setData, patch, processing, errors } = useForm({
        question: faq.question,
        answer: faq.answer,
    });

    return (
        <>
            <AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.update') }
				submit= { () => patch('/admin/faqs/' + faq.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
        </>
    );
}
