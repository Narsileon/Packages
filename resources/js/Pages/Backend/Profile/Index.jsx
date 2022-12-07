import { useState } from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Form, FormCheckbox, FormHeader, FormSelect } from "@/Components/Forms";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import Tabs from "@/Components/Tabs/Tabs";
import TabPanel from "@/Components/Tabs/TabPanel";
import AppHead from "@/Shared/AppHead";
import Permissions from "@/Components/Forms/Permissions";

export default function Index({
    permissions,
    user,
    userSettings
}) {
    const { data, setData, patch, processing, errors } = useForm({
        language: userSettings.language,
        dark: userSettings.dark,
    });

    const locales = usePage().props.shared.localization.locales;

    const tabsSettings = [
        {
            id: 'profile',
            label: transChoice('common.profiles', 1),
        },
        {
            id: 'roles_permissions',
            label: `${ transChoice('permissions.roles', 2) } & ${ upperFirst(transChoice('permissions.permissions', 1)) }`,
        },
        {
            id: 'settings',
            label: transChoice('common.settings', 2),
        },
    ]

    const [activeTab, setActiveTab] = useState();

    return (
        <>
            <AppHead title={ transChoice('common.profiles', 1) } />

            <Tabs
                tabsSettings={ tabsSettings }
                activeTab={ activeTab }
                setActiveTab={ setActiveTab }
            >
                <TabPanel
                    id="profile"
                    activeTab={ activeTab }
                >
                    <div>
                        <div className="space-x-1">
                            <span>
                                { upperFirst(transChoice(trans('common.last_names', 1)) + trans(':')) }
                            </span>
                            <span>
                                { user.data.last_name }
                            </span>
                        </div>
                        <div className="space-x-1">
                            <span>
                                { upperFirst(transChoice(trans('common.first_names', 1)) + trans(':')) }
                            </span>
                            <span>
                                { user.data.first_name }
                            </span>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel
                    id="roles_permissions"
                    activeTab={ activeTab }
                >
                    <div>
                        <Permissions permissions={ permissions } />
                    </div>
                </TabPanel>

                <TabPanel
                    id="settings"
                    activeTab={ activeTab }
                >
                     <Form submit={ () => patch(route('user_settings.update', userSettings.id)) }>
                        <FormHeader>
                            <div className="flex justify-center">
                                <h1>
                                    { upperFirst(transChoice('common.settings', 2)) }
                                </h1>
                            </div>
                        </FormHeader>

                        <section id="form-body">
                            <div className="grid grid-cols-1 gap-4">
                                { /* App name */ }
                                <FormSelect
                                    id="language"
                                    label={ transChoice('common.languages', 1) }
                                    value={ data.language }
                                    error={ errors.language }
                                    setData={ setData }
                                >
                                    {
                                        locales.map((locale) => {
                                            return (
                                                <option
                                                    value={ locale }
                                                    key={ locale }
                                                >
                                                    { upperFirst(trans(`locale.${ locale }`))}
                                                </option>
                                            );
                                        })
                                    }

                                </FormSelect>
                                <FormCheckbox
                                    id="dark"
                                    label={ trans('common.dark_mode') }
                                    checked={ data.dark }
                                    error={ errors.dark }
                                    setData={ setData }
                                />
                            </div>
                        </section>

                        <hr className="border-color" />

                        <section id="form-footer">
                            <div className="flex items-center justify-between">
                                <PrimaryButton
                                    label={ trans('common.update') }
                                    processing={ processing }
                                />
                            </div>
                        </section>
                    </Form>
                </TabPanel>
            </Tabs>
        </>
    );
}