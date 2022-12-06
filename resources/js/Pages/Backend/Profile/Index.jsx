import { useState } from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Form, FormFooter, FormHeader, FormSelect } from "@/Components/Forms";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import Tabs from "@/Components/Tabs/Tabs";
import TabPanel from "@/Components/Tabs/TabPanel";
import AppHead from "@/Shared/AppHead";

export default function Index({ user, userSettings }) {
    const { data, setData, patch, processing, errors } = useForm({
        language: userSettings.language,
        theme: userSettings.theme,
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
                    id="settings"
                    activeTab={ activeTab }
                >
                     <Form submit={ () => patch(route('admin.user_settings.update', userSettings.id)) }>
                        <FormHeader>
                            <div className="flex justify-center">
                                <h1>
                                    { upperFirst(transChoice('common.settings', 2)) }
                                </h1>
                            </div>
                        </FormHeader>

                        <section id="form-body">
                            <div className="grid grid-cols-1 gap-4">
                                {/* App name */}
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
                                                >
                                                    { upperFirst(trans(`locale.${ locale }`))}
                                                </option>
                                            );
                                        })
                                    }

                                </FormSelect>
                                <FormSelect
                                    id="theme"
                                    label={ transChoice('common.themes', 1) }
                                    value={ data.theme }
                                    error={ errors.theme }
                                    setData={ setData }
                                >
                                    <option
                                        value="light"
                                    >
                                        { upperFirst(trans('common.light_mode'))}
                                    </option>
                                    <option
                                        value="dark"
                                    >
                                        { upperFirst(trans('common.dark_mode'))}
                                    </option>
                                </FormSelect>
                            </div>
                        </section>

                        <FormFooter>
                            <PrimaryButton
                                label={ trans('common.update') }
                                processing={ processing }
                            />
                        </FormFooter>
                    </Form>
                </TabPanel>

                <TabPanel
                    id="roles_permissions"
                    activeTab={ activeTab }
                >
                    <div>

                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
}