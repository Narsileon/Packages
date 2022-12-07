import { transChoice } from "@/narsil-localization";
import { Form, FormHeader, FormInput } from "@/Components/Forms";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import Permissions from "@/Components/Forms/Permissions";

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
                    { /* Name */ }
                    <FormInput
                        id="name"
                        label={ transChoice('common.names', 1) }
                        value={ data.name }
                        error={ errors.name }
                        setData={ setData }
                    />

                    <hr className="border-color"/>

                    { /* Permissions */ }
                    <Permissions
                        data={ data.permissions }
                        permissions={ permissions }
                        setData={ (name, value) => setData("permissions", { ...data.permissions, [name]: value }) }
                    />
                </div>
            </section>

            <hr className="border-color" />

            <section id="form-footer">
                <div className="flex items-center justify-between">
                    <BackButton
                        className="primary-button"
                        href={ route('admin.roles.index') }
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
