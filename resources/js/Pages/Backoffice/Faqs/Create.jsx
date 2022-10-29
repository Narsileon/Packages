import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { Form, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

export default function Create() {
	const { data, setData, post, processing, errors } = useForm({
        question: '',
        answer: '',
    });

	return (
		<>
			<Head title={ t('Create faq') } />

			<Form
				header={
					<FormHeader title={ t("Create faq") } />
				}
				footer={
					<FormFooter
						label="Create"
						processing={ processing }
					/>
				}
				submit={ () => post('/backoffice/faqs') }
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
