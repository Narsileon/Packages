import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Form, FormBody, FormCheckbox, FormFooter, FormInput, FormSelect } from "@/Components/Forms";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import SortableTree from "./SortableTree";

export default function Formular({
    label,
    submit,
    data,
    setData,
    processing,
    errors,
 }) {
    const categories = [
        'backend-menu',
        'frontend-footer',
        'frontend-header',
    ];

    return (
        <Form submit={ submit }>
            <FormBody>
                <FormInput
                    id="title"
                    label={ transChoice('common.names', 1) }
                    value={ data.title }
                    error={ errors.title }
                    setData={ setData }
                />
                <FormSelect
                    id="category"
                    label={ transChoice('common.categories', 1) }
                    value={ data.category }
                    error={ errors.category }
                    setData={ setData }
                >
                    <option
                        value={ 'none' }
                        key={ 'none' }
                    >
                        { '---' }
                    </option>
                    {
                        categories.map((category, index) => {
                            return (
                                <option
                                    value={ category }
                                    key={ index }
                                >
                                    { upperFirst(category) }
                                </option>
                            );
                        })
                    }
                </FormSelect>
                <FormCheckbox
                    id="active"
                    label={ trans('common.active') }
                    checked={ data.active }
                    error={ errors.active }
                    setData={ setData }
                />
            </FormBody>

            <hr className="border-color" />

            <section id="sortable-tree">
                {
                    <SortableTree
                        data={ data.template }
                        setData={ (value) => setData('template', value) }
                        collapsible
                        indicator
                        removable
                    />
                }
            </section>

            <FormFooter>
                <PrimaryButton
                    label={ label }
                    processing={ processing }
                />
            </FormFooter>
        </Form>
    );
}
