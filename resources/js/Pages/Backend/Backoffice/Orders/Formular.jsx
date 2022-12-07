import { transChoice } from "@/narsil-localization";
import { Form, FormHeader, FormInput } from "@/Components/Forms";
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

            <section id="form-body">
                <div className="grid grid-cols-1 gap-4">
                    {/* Type */}
                    <FormInput
                        id="type"
                        label={ transChoice('common.types', 1) }
                        value={ data.type }
                        error={ errors.type }
                        setData={ setData }
                    />
                    {/* Status */}
                    <FormInput
                        id="status"
                        label={ transChoice('common.statuses', 1) }
                        value={ data.status }
                        error={ errors.status }
                        setData={ setData }
                    />
                </div>
            </section>

            <hr className="border-color" />

            <section id="form-footer">
                <div className="flex items-center justify-between">
                    <BackButton
                        className="primary-button"
                        href={ route('admin.orders.index') }
                    />
                    <PrimaryButton
                        label={ label }
                        processing={ processing }
                    />
                </div>
            </section>
        </Form>
    );
}
