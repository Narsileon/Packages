import { trans, transChoice } from "@/narsil-localization";
import { useScrollTo } from "@/narsil-react";
import { Form, FormCheckbox, FormFooter, FormHeader, FormInput, FormSectionHeader, FormSummary } from "@/Components/Forms";
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

                <section id="form-body">
                    <div className="grid grid-cols-1 gap-4">
                        {/* Username */}
                        <FormInput
                            id="username"
                            label={ transChoice('common.usernames', 1) }
                            value={ data.username }
                            error={ errors.username }
                            setData={ setData }
                        />
                        {/* Email */}
                        <FormInput
                            id="email"
                            label={ transChoice('common.emails', 1) }
                            type="email"
                            value={ data.email}
                            error={ errors.email}
                            setData={ setData }
                        />
                        {
                            data.password != null ? (
                                <>
                                    {/* Password */}
                                    <FormInput
                                        id="password"
                                        label={ transChoice('common.passwords', 1) }
                                        type="password"
                                        value={ data.password}
                                        error={ errors.password}
                                        setData={ setData }
                                    />
                                    {/* Password Confirmation */}
                                    <FormInput
                                        id="password_confirmation"
                                        label={ trans('validation.attributes.password_confirmation') }
                                        type="password"
                                        value={ data.password_confirmation}
                                        error={ errors.password_confirmation}
                                        setData={ setData }
                                        autoComplete="new-password"
                                    />
                                </>
                            ) : null
                        }
                        {/* Last name */}
                        <FormInput
                            id="last_name"
                            label={ transChoice('common.last_names', 1) }
                            value={ data.last_name }
                            error={ errors.last_name }
                            setData={ setData }
                        />
                        {/* First name */}
                        <FormInput
                            id="first_name"
                            label={ transChoice('common.first_names', 1) }
                            value={ data.first_name }
                            error={ errors.first_name }
                            setData={ setData }
                        />

                        {/* Roles */}
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

                        {/* Permissions */}
                        <section ref={ permissionSection }>
                            <FormSectionHeader title={transChoice('permissions.permissions', 2) } />

                            <Permissions
                                data={ data.permissions }
                                permissions={ permissions }
                                setData={ (name, value) => setData("permissions", { ...data.permissions, [name]: value }) }
                            />
                        </section>
                    </div>
                </section>

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