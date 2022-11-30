import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Create({ permissions }) {
	const title = trans('Creating a new role:');

	function initializeObject(collection) {
		let object = {};

		collection.data.map((item) => {
			object[item.name] = false;
		});

		return object;
	}

	const { data, setData, transform, post, processing, errors } = useForm({
		name: "",
		permissions: initializeObject(permissions),
	});

	const submit = () => {
		transform(() => ({
			...data,
			permissions: permissions.data.filter(x => data.permissions[x.name] == true)
		}))

        post('/admin/roles');
    };

	return (
		<>
			<AppHead title={ title }/>

			<Formular
				title= { title }
				label= { trans('common.create') }
				submit= { submit }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
				permissions={ permissions }
			/>
		</>
	);
}
