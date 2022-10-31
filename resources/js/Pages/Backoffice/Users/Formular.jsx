import { p, t } from "@/narsil-localization";
import { useScrollTo } from "@/narsil-react";
import { Form, FormCheckbox, FormFooter, FormHeader, FormInput, FormSectionHeader, FormSummary } from "@/Components/Forms";

export default function Formular({
    title,
    label,
    submit,
    data,
    setData,
    processing,
    errors,
    roles,
    permissions,
}) {
	const [roleSection, scrollToRoles] = useScrollTo();
	const [permissionSection, scrollToPermissions] = useScrollTo();

    return (
        <div className="flex justify-between space-x-8">
            <FormSummary>
                <button onClick={ scrollToRoles }>
                    { p('permissions.roles', 2) }
                </button>
                <button onClick={ scrollToPermissions }>
                    { p('permissions.permissions', 2) }
                </button>
            </FormSummary>
            <Form
                header={ <FormHeader title={ title }/> }
                footer={ <FormFooter label={ label } processing={ processing }/> }
                submit={ submit }
            >
            <FormInput
                    id="username"
                    label={ t('validation.attributes.username') }
                    value={ data.username }
                    error={ errors.username }
                    setData={ setData }
                />
                <FormInput
                    id="email"
                    label={ t('validation.attributes.email') }
                    type="email"
                    value={ data.email}
                    error={ errors.email}
                    setData={ setData }
                />
                <FormInput
                    id="password"
                    label={ t('validation.attributes.password') }
                    type="password"
                    value={ data.password}
                    error={ errors.password}
                    setData={ setData }
                />
                <FormInput
                    id="last_name"
                    label={ t('validation.attributes.last_name') }
                    value={ data.last_name }
                    error={ errors.last_name }
                    setData={ setData }
                />
                <FormInput
                    id="first_name"
                    label={ t('validation.attributes.first_name') }
                    value={ data.first_name }
                    error={ errors.first_name }
                    setData={ setData }
                />

                <section ref={ roleSection }>
                    <FormSectionHeader title={ p('permissions.roles', 2) } />

                    {
                        roles.data.map((role) => {
                            return (
                                <FormCheckbox
                                    id={ role.name }
                                    label={ t(`permissions.${ role.name }`) }
                                    checked={ data.roles[role.name] }
                                    error={ errors[data.roles[role.name]] }
                                    onChange={ (e) => setData("roles", { ...data.roles, [role.name]: e.target.checked }) }
                                    key={ role.id }
                                />
                            );
                        })
                    }
                </section>

                <section ref={ permissionSection }>
                    <FormSectionHeader title={ p('permissions.permissions', 2) } />

                    {
                        permissions.data.map((permission) => {
                            return (
                                <FormCheckbox
                                    id={ permission.name }
                                    label={ t(`permissions.${ permission.name }`) }
                                    checked={ data.permissions[permission.name] }
                                    error={ errors[data.permissions[permission.name]] }
                                    onChange={ (e) => setData("permissions", { ...data.permissions, [permission.name]: e.target.checked }) }
                                    key={ permission.id }
                                />
                            );
                        })
                    }
                </section>
            </Form>
        </div>
    );
}