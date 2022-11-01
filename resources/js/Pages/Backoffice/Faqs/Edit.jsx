import { Head, useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Formular from "./Formular";

export default function Edit({ faq }) {
	const title = t('Edit :resource', { 'resource': trans('FAQ') });

    const { data, setData, patch, processing, errors } = useForm({
        question: faq.question,
        answer: faq.answer,
    });

    return (
        <>
            <Head title={ title } />

			<Formular
				title= { title }
				label= { trans('Update') }
				submit= { () => patch('/backoffice/faqs/' + faq.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
        </>
    );
}
