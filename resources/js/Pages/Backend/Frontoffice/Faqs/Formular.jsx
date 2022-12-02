import { transChoice } from "@/narsil-localization";
import { Form, FormFooter, FormHeader, FormInput } from "@/Components/Forms";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function Formular({
    title,
    label,
    submit,
    data,
    setData,
    processing,
    errors,
}) {
    return (
        <Form submit={ submit }>
            <FormHeader>
                <div className="flex justify-center">
                    <h1>
                        { title }
                    </h1>
                </div>
            </FormHeader>

            <div className="grid grid-cols-1 gap-4">
                {/* Question */}
                <FormInput
                    id="question"
                    label={ transChoice('common.questions', 1) }
                    value={ data.question }
                    error={ errors.question }
                    setData={ setData }
                />
                {/* Answer */}
                <FormInput
                    id="answer"
                    label={ transChoice('common.answers', 1) }
                    value={ data.answer }
                    error={ errors.answer }
                    setData={ setData }
                />
            </div>

            <FormFooter>
                <BackButton
                    className="primary-button"
                    href={ route('admin.faqs.index') }
                />
                <PrimaryButton
                    label={ label }
                    processing={ processing }
                />
            </FormFooter>
        </Form>
    );
}