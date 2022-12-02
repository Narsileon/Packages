import { trans, transChoice } from "@/narsil-localization";
import { Form, FormCheckbox, FormFooter, FormHeader, FormInput } from "@/Components/Forms";
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
    permissions,
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
                    {/* Name */}
                    <FormInput
                        id="name"
                        label={ transChoice('common.names', 1) }
                        value={ data.name }
                        error={ errors.name }
                        setData={ setData }
                    />

                    {
                        permissions.data.map((permission) => {
                            return (
                                <FormCheckbox
                                    id={ permission.name }
                                    label={ trans(`permissions.${ permission.name }`) }
                                    type="checkbox"
                                    checked={ data.permissions[permission.name] }
                                    error={ errors[data.permissions[permission.name]] }
                                    onChange={ (e) => setData('permissions', { ...data.permissions, [permission.name]: e.target.checked }) }
                                    key={ permission.id }
                                />
                            );
                        })
                    }
                </div>
            </section>

            <FormFooter>
                <BackButton
                    className="primary-button"
                    href={ route('admin.roles.index') }
                />
                <PrimaryButton
                    label={ label }
                    processing={ processing }
                />
            </FormFooter>
        </Form>
    );
}