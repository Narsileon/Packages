import { trans } from "@/narsil-localization";
import { Form, FormBody, FormFooter, FormHeader, FormInput } from "@/Components/Forms";
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

            <FormBody>
                <FormInput
                    id="type"
                    label={ trans('validation.attributes.type') }
                    value={ data.type }
                    error={ errors.type }
                    setData={ setData }
                />
                <FormInput
                    id="status"
                    label={ trans('validation.attributes.status') }
                    value={ data.status }
                    error={ errors.status }
                    setData={ setData }
                />
            </FormBody>

            <FormFooter>
                <BackButton
                    className="primary-button"
                    href={ route('admin.orders.index') }
                />
                <PrimaryButton
                    label={ label }
                    processing={ processing }
                />
            </FormFooter>
        </Form>
    );
}