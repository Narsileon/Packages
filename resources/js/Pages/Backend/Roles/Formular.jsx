import { trans } from "@/narsil-localization";
import { Form, FormCheckbox, FormFooter, FormHeader, FormInput } from "@/Components/Forms";

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
        <Form
            header={ <FormHeader title={ title }/> }
            footer={ <FormFooter label={ label } processing={ processing }/> }
            submit={ submit }
        >
            <FormInput
                id="name"
                label={ trans('validation.attributes.name') }
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
        </Form>
    );
}