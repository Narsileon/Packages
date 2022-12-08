import { useState } from "react";
import { trans, transChoice } from "@/narsil-localization";
import { usePage } from "@inertiajs/inertia-react";
import { upperFirst } from "lodash";
import { Form, FormCheckbox, FormHeader, FormInput, FormSectionHeader, FormSelect } from "@/Components/Forms";
import { TabPanel, Tabs } from "@/Components/Tabs";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import FormIcon from "@/Components/Forms/FormIcon";
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
    const routes = usePage().props.shared.ziggy.routes;

    const tabsSettings = [
        {
            id: 'menu_item',
            label: transChoice('common.menu_items', 1),
        },
        {
            id: 'roles_permissions',
            label: `${ transChoice('permissions.roles', 2) } & ${ upperFirst(transChoice('permissions.permissions', 2)) }`,
        },
    ]

    const [activeTab, setActiveTab] = useState('menu_item');

    const options = [
        {
            label: 'common.categories',
            type: 'category',
        },
        {
            label: 'common.pages',
            type: 'page',
        },
        {
            label: 'common.external_links',
            type: 'external_link',
        },
    ]

    return (
        <Form submit={ submit }>
            <FormHeader>
                <div className="flex justify-center">
                    <h1>
                        { title }
                    </h1>
                </div>
            </FormHeader>

            <Tabs
                tabsSettings={ tabsSettings }
                activeTab={ activeTab }
                setActiveTab={ setActiveTab }
            >
                <TabPanel
                    id="menu_item"
                    activeTab={ activeTab }
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        { /* Slug */ }
                        <FormInput
                            id="slug"
                            label={ transChoice('common.slugs', 1) }
                            value={ data.slug }
                            error={ errors.slug }
                            setData={ setData }
                        />
                        { /* Active */ }
                        <FormCheckbox
                            id="active"
                            label={ trans('common.active') }
                            checked={ data.active }
                            error={ errors.active }
                            setData={ setData }
                        />
                        { /* Type */ }
                        <FormSelect
                            id="type"
                            label={ transChoice('common.types', 1) }
                            value={ data.type }
                            error={ errors.type }
                            setData={ setData }
                        >
                            {
                                options.map((option) => {
                                    return (
                                        <option
                                            value={ option.type }
                                            key={ option.type }
                                        >
                                            { upperFirst(transChoice(option.label, 1)) }
                                        </option>
                                    );
                                })
                            }
                        </FormSelect>
                        { /* Icon */ }
                        <FormIcon
                            id="icon"
                            label={ transChoice('common.icons', 1) }
                            value={ data.icon }
                            error={ errors.icon }
                            setData={ setData }
                        />
                        { /* Label */ }
                        <FormInput
                            id="label"
                            label={ transChoice('common.designations', 1) }
                            value={ data.label.value }
                            error={ errors.label }
                            onChange={ (event) => setData('label', { ...data.label, value: event.target.value }) }
                        />
                        <FormCheckbox
                            id="label"
                            label={ trans('common.plural') }
                            checked={ data.label.plural }
                            error={ errors.label }
                            onChange={ (event) => setData('label', { ...data.label, plural: event.target.checked }) }
                        />
                        {
                            data.type == 'page' ? (
                                <FormSelect
                                    id="url"
                                    label={ transChoice('common.pages', 1) }
                                    value={ data.url }
                                    error={ errors.url }
                                    setData={ setData }
                                >
                                    {
                                        Object.keys(routes).map((key, index) => {
                                            return (
                                                <option
                                                    value={ key }
                                                    key={ index }
                                                >
                                                    { key }
                                                </option>
                                            );
                                        })
                                    }
                                </FormSelect>
                            ) : data.type == 'external_link' ? (
                                <FormInput
                                    id="url"
                                    label={ transChoice('common.urls', 1) }
                                    value={ data.url }
                                    error={ errors.url }
                                    setData={ setData }
                                />
                            ) : null
                        }
                    </div>
                </TabPanel>

                <TabPanel
                    id="roles_permissions"
                    activeTab={ activeTab }
                >
                    <div className="grid grid-cols-1 gap-4">
                        { /* Roles */ }
                        <section id="roles">
                            <FormSectionHeader title={ transChoice('permissions.roles', 2) } />
                            {
                                roles.data.map((role) => {
                                    return (
                                        <FormCheckbox
                                            id={ role.name }
                                            label={ trans(`permissions.${ role.name }`) }
                                            checked={ data.roles[role.name] }
                                            error={ errors[data.roles[role.name]] }
                                            onChange={ (e) => setData('roles', { ...data.roles, [role.name]: e.target.checked }) }
                                            key={ role.id }
                                        />
                                    );
                                })
                            }
                        </section>

                        { /* Permissions */ }
                        <section id="permissions">
                            <FormSectionHeader title={ transChoice('permissions.permissions', 2) } />

                            <Permissions
                                data={ data.permissions }
                                permissions={ permissions }
                                setData={ (name, value) => setData('permissions', { ...data.permissions, [name]: value }) }
                            />
                        </section>
                    </div>
                </TabPanel>
            </Tabs>

            <hr className="border-color" />

            <section id="form-footer">
                <div className="flex items-center justify-between">
                    <BackButton
                        className="primary-button"
                        href={ route('admin.menuItems.index') }
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
