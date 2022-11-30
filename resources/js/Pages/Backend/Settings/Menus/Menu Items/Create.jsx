import { useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Formular from "./Formular";

export default function Create() {
	const title = trans('Create :resource', { 'resource': transChoice('common.menu_items', 1) });

	const { data, setData, post, processing, errors } = useForm({
        type: '',
        label: '',
        url: '',
    });

	return (
        <div className="fixed top-0 left-0 bg-white/30 w-screen h-screen z-50">
            <div className="flex items-center h-screen w-96 m-auto">
                <Formular
                    title= { title }
                    label= { trans('common.create') }
                    submit= { () => post('/admin/menu_items') }
                    data={ data }
                    setData={ setData }
                    processing={ processing }
                    errors={ errors }
                />
            </div>
        </div>
	);
}
