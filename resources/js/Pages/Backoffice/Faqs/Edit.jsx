import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { Form, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

export default function Edit({ faq }) {
    const { data, setData, patch, processing, errors } = useForm({
        question: faq.question,
        answer: faq.answer,
    });

    return (
        <>
            <Head title={ t('Edit faq') } />

			<Form
				header={
					<FormHeader title={ t("Edit faq") } />
				}
				footer={
					<FormFooter
						label={ t('Update') }
						processing={ processing }
					/>
				}
				submit={ () => patch('/backoffice/faqs/' + faq.id) }
			>
                <FormInput
					id="question"
					label={ t('validation.attributes.question') }
					value={ data.question }
					error={ errors.question }
					setData={ setData }
				/>
				<FormInput
					id="answer"
					label={ t('validation.attributes.answer') }
					value={ data.answer }
					error={ errors.answer }
					setData={ setData }
				/>
            </Form>
        </>
    );
}
