import { Head, useForm } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { Form, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

export default function Edit({ question }) {
    const { data, setData, patch, processing, errors } = useForm({
        question: question.data.question,
        answer: question.data.answer,
    });

    return (
        <>
            <Head title={ t('Edit question') } />

			<Form
				header={
					<FormHeader title={ t("Edit question") } />
				}
				footer={
					<FormFooter
						label="Update"
						processing={ processing }
					/>
				}
				submit={ () => patch('/backoffice/questions/' + question.data.id) }
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
