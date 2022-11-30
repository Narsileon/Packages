import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Form, FormBody, FormFooter, FormHeader, FormInput, FormSelect } from "@/Components/Forms";
import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import Icon from "@/Shared/Svg/Icon";

export default function Formular({
    title,
    label,
    submit,
    data,
    setData,
    processing,
    errors,
    options,
    icons,
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
                <FormSelect
                    id="icon"
                    label={ transChoice('common.icons', 1) }
                    value={ data.icon }
                    error={ errors.icon }
                    setData={ setData }
                >
                    {
                        icons.map((icon) => {
                            return (
                                <option
                                    value={ icon }
                                    key={ icon }
                                >
                                    { icon }
                                </option>
                            );
                        })
                    }
                </FormSelect>
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
