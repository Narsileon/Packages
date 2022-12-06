import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import { Form, FormCheckbox, FormFooter, FormInput, FormSelect } from "@/Components/Forms";
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
    const menus = [
        {
            label: 'backend_menu',
            type: 'backend_menu',
        },
        {
            label: 'frontend_footer',
            type: 'frontend_footer',
        },
        {
            label: 'frontend_header',
            type: 'frontend_header',
        },
    ];

    return (
        <Form submit={ submit }>
            <section id="form-body">
                <div className="grid grid-cols-1 gap-4">
                    {/* Title */}
                    <FormInput
                        id="title"
                        label={ transChoice('common.names', 1) }
                        value={ data.title }
                        error={ errors.title }
                        setData={ setData }
                    />
                    {/* Category */}
                    <FormSelect
                        id="category"
                        label={ transChoice('common.types', 1) }
                        value={ data.type }
                        error={ errors.type }
                        setData={ setData }
                    >
                        <option
                            value={ 'none' }
                            key={ 'none' }
                        >
                            { '---' }
                        </option>
                        {
                            menus.map((menu, index) => {
                                return (
                                    <option
                                        value={ menu.type }
                                        key={ index }
                                    >
                                        { upperFirst(menu.label) }
                                    </option>
                                );
                            })
                        }
                    </FormSelect>
                    {/* Active */}
                    <FormCheckbox
                        id="active"
                        label={ trans('common.active') }
                        checked={ data.active }
                        error={ errors.active }
                        setData={ setData }
                    />
                </div>
            </section>
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
