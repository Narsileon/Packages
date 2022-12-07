import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Formular from "./Formular";
import SortableItems from "./SortableItems";

export default function Edit({
    menu,
    menuItems,
}) {
    const { data, setData, patch, processing, errors } = useForm({
        title: menu.title,
        type: menu.type,
		active: menu.active,
        template: menu.template
    });

    return (
        <>
            <div className="col-span-2 md:col-span-1 min-h-0 overflow-y-auto">
                <section id="sortable-items">
                    <div className="space-y-2">
                        {
                            data.type == 'backend_menu' ? (
                                <SortableItems
                                    title="common.categories"
                                    items={ menuItems.data.filter(item => item.type == 'category') }
                                    setData={ setData }
                                />
                            ) : null
                        }
                        <SortableItems
                            title="common.pages"
                            items={ menuItems.data.filter(item => item.type == 'page') }
                            setData={ setData }
                        />
                    </div>
                </section>
            </div>

            <div className="col-span-2 md:col-span-3 min-h-0 overflow-y-auto">
                <Formular
                    label= { trans('common.update') }
                    submit= { () => patch(route('admin.menus.update', menu.id)) }
                    data={ data }
                    setData={ setData }
                    processing={ processing }
                    errors={ errors }
                />
            </div>
        </>
    );
}
