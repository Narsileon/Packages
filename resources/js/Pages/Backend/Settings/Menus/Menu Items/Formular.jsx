import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Form, FormBody, FormFooter, FormHeader, FormInput, FormSelect } from "@/Components/Forms";
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
    options,
    setVisible,
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

            <FormBody>
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
            </FormBody>

            <FormFooter>
                <BackButton
                    className="primary-button"
                    onClick={ setVisible }
                />
                <PrimaryButton
                    label={ label }
                    processing={ processing }
                />
            </FormFooter>
        </Form>
    );
}
