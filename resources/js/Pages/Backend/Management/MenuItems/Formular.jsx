import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Form, FormHeader, FormInput, FormSelect } from "@/Components/Forms";
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

            <section id="form-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Slug */}
                    <div className="col-span-1 md:col-span-2">
                        <FormInput
                            id="slug"
                            label={ transChoice('common.slugs', 1) }
                            value={ data.slug }
                            error={ errors.slug }
                            setData={ setData }
                        />
                    </div>
                    {/* Type */}
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
                    {/* Icon */}
                    <FormIcon
                        id="icon"
                        label={ transChoice('common.icons', 1) }
                        value={ data.icon }
                        error={ errors.icon }
                        setData={ setData }
                    />
                    {/* Label */}
                    <FormInput
                        id="label"
                        label={ transChoice('common.designations', 1) }
                        value={ data.label }
                        error={ errors.label }
                        setData={ setData }
                    />
                    {/* URL */}
                    <FormInput
                        id="url"
                        label={ transChoice('common.urls', 1) }
                        value={ data.url }
                        error={ errors.url }
                        setData={ setData }
                    />
                </div>
            </section>

            <hr className="border-color" />

            <section id="form-footer">
                <div className="flex items-center justify-between">
                    <BackButton
                        className="primary-button"
                        href={ route('admin.menu_items.index') }
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
