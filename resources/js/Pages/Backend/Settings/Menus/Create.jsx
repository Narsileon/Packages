import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Formular from "./Formular";
import SortableItems from "./SortableItems";

export default function Create({ menuItems }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        category: '',
		active: '',
        template: [],
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
                    label= { trans('common.create') }
                    submit= { () => post('/admin/user_menus') }
                    data={ data }
                    setData={ setData }
                    processing={ processing }
                    errors={ errors }
                />
            </div>
        </>
    );
}