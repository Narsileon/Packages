import { trans, transChoice } from "@/narsil-localization";
import { useScrollTo } from "@/narsil-react";
import { Form, FormBody, FormCheckbox, FormFooter, FormHeader, FormInput, FormSectionHeader, FormSummary } from "@/Components/Forms";
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
    roles,
    permissions,
}) {
	const [roleSection, scrollToRoles] = useScrollTo();
	const [permissionSection, scrollToPermissions] = useScrollTo();

    return (
        <div className="flex justify-between h-full space-x-8">
            <FormSummary>
                <button onClick={ scrollToRoles }>
                    {transChoice('permissions.roles', 2) }
                </button>
                <button onClick={ scrollToPermissions }>
                    {transChoice('permissions.permissions', 2) }
                </button>
            </FormSummary>

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
                        id="username"
                        label={ transChoice('common.usernames', 1) }
                        value={ data.username }
                        error={ errors.username }
                        setData={ setData }
                    />
                    <FormInput
                        id="email"
                        label={ transChoice('common.emails', 1) }
                        type="email"
                        value={ data.email}
                        error={ errors.email}
                        setData={ setData }
                    />
                    {
                        data.password ? (
                            <FormInput
                                id="password"
                                label={ transChoice('common.passwords', 1) }
                                type="password"
                                value={ data.password}
                                error={ errors.password}
                                setData={ setData }
                            />
                        ) : null
                    }
                    <FormInput
                        id="last_name"
                        label={ transChoice('common.last_names', 1) }
                        value={ data.last_name }
                        error={ errors.last_name }
                        setData={ setData }
                    />
                    <FormInput
                        id="first_name"
                        label={ transChoice('common.first_names', 1) }
                        value={ data.first_name }
                        error={ errors.first_name }
                        setData={ setData }
                    />

                    <section ref={ roleSection }>
                        <FormSectionHeader title={transChoice('permissions.roles', 2) } />

                        {
                            roles.data.map((role) => {
                                return (
                                    <FormCheckbox
                                        id={ role.name }
                                        label={ trans(`permissions.${ role.name }`) }
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
                        <FormSectionHeader title={transChoice('permissions.permissions', 2) } />

                        {
                            permissions.data.map((permission) => {
                                return (
                                    <FormCheckbox
                                        id={ permission.name }
                                        label={ trans(`permissions.${ permission.name }`) }
                                        checked={ data.permissions[permission.name] }
                                        error={ errors[data.permissions[permission.name]] }
                                        onChange={ (e) => setData("permissions", { ...data.permissions, [permission.name]: e.target.checked }) }
                                        key={ permission.id }
                                    />
                                );
                            })
                        }
                    </section>
                </FormBody>

                <FormFooter>
                    <BackButton
                        className="primary-button"
                        href={ route('admin.users.index') }
                    />
                    <PrimaryButton
                        label={ label }
                        processing={ processing }
                    />
                </FormFooter>
            </Form>
        </div>
    );
}