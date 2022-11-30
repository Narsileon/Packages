import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Create() {
	const title = trans('Creating a new footer link:');

	const { data, setData, post, processing, errors } = useForm({
        label: '',
        url: '',
		active: '',
    });

	return (
		<>
			<AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.create') }
				submit= { () => post('/admin/footer_links') }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
		</>
	);
}
