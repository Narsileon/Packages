import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import Formular from "./Formular";

export default function Edit({ order }) {
	const title = t('Edit :resource', { 'resource': p('common.orders', 1) });

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
				submit= { () => patch('/backoffice/orders/' + order.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
        </>
    );
}
