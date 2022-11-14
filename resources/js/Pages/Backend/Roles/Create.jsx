import { Head, useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import Formular from "./Formular";

export default function Create({ permissions }) {
	const title = trans('Create :resource', {'resource': trans('permissions.new_role')});

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
			<Head title={ title }/>

			<Formular
				title= { title }
				label= { trans('Create') }
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
