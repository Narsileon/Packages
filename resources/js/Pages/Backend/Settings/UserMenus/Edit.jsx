import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Formular from "./Formular";
import SortableItems from "./SortableItems";

export default function Edit({ menu, menuItems }) {
    const { data, setData, patch, processing, errors } = useForm({
        title: menu.title,
        category: menu.category,
		active: menu.active,
        template: menu.template
    });

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
        <>
            <div className="col-span-2 md:col-span-1 min-h-0 overflow-y-auto">
                <section id="sortable-items">
                    <div className="space-y-2">
                        {
                            options.map((option) => {
                                return (
                                    <SortableItems
                                        items={ menuItems.data.filter(item => item.type == option.type) }
                                        option={ option }
                                        setData={ setData }
                                        key={ option.type }
                                    />
                                );
                            })
                        }
                    </div>
                </section>
            </div>

            <div className="col-span-2 md:col-span-3 min-h-0 overflow-y-auto">
                <Formular
                    label= { trans('common.update') }
                    submit= { () => patch('/admin/user_menus/' + menu.id) }
                    data={ data }
                    setData={ setData }
                    processing={ processing }
                    errors={ errors }
                />
            </div>
        </>
    );
}
