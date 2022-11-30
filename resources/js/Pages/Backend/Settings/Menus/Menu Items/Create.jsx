import { useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Window from "@/Shared/Window";
import Formular from "./Formular";

export default function Create({ options, showCreate }) {
	const title = trans('Creating a new menu item:');

	const { data, setData, post, processing, errors } = useForm({
        type: '',
        label: '',
        url: '',
    });

	return (
        <Window>
            <Formular
                title= { title }
                label= { trans('common.create') }
                submit= { () => {
                    showCreate(false)
                    post('/admin/menu_items')
                }}
                data={ data }
                setData={ setData }
                processing={ processing }
                errors={ errors }
                options={ options }
                showCreate={ showCreate }
            />
        </Window>
	);
}
