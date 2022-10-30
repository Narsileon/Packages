import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import Formular from "./Formular";

export default function Edit({ faq }) {
	const title = t('Edit faq');

    const { data, setData, patch, processing, errors } = useForm({
        question: faq.question,
        answer: faq.answer,
    });

    return (
        <>
            <Head title={ title } />

			<Formular
				title= { title }
				label= { t('Update') }
				submit= { () => patch('/backoffice/faqs/' + faq.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
        </>
    );
}
