import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Form, FormBody, FormFooter, FormHeader, FormInput, FormSelect } from "@/Components/Forms";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import FormIcon from "@/Components/Forms/FormIcon";

export default function Formular({
    title,
    label,
    submit,
    data,
    setData,
    processing,
    errors,
}) {
    const options = [
        {
            label: 'common.categories',
            type: 'category',
        },
        {
            label: 'common.pages',
            type: 'page',
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

            <FormBody>
                <div className="col-span-1 md:col-span-2">
                    <FormInput
                        id="slug"
                        label={ transChoice('common.slugs', 1) }
                        value={ data.slug }
                        error={ errors.slug }
                        setData={ setData }
                    />
                </div>
                <div className="col-span-1">
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
                </div>
                <FormIcon
                    id="icon"
                    label={ transChoice('common.icons', 1) }
                    value={ data.icon }
                    error={ errors.icon }
                    setData={ setData }
                />
                <FormInput
                    id="label"
                    label={ transChoice('common.designations', 1) }
                    value={ data.label }
                    error={ errors.label }
                    setData={ setData }
                />
                <FormInput
                    id="url"
                    label={ transChoice('common.urls', 1) }
                    value={ data.url }
                    error={ errors.url }
                    setData={ setData }
                />
            </FormBody>

            <FormFooter>
                <BackButton
                    className="primary-button"
                    href={ route('admin.menu_items.index') }
                />
                <PrimaryButton
                    label={ label }
                    processing={ processing }
                />
            </FormFooter>
        </Form>
    );
}