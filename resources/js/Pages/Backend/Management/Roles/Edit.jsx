import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Edit({ role, permissions }) {
	const title = trans('Editing the role:');

	function initializeObject(collection) {
		let object = {};

		collection.data.map((item) => {
			object[item.name] = role.data.permissions.some(x => x.id === item.id);
		});

		return object;
	}

	const { data, setData, transform, patch, processing, errors } = useForm({
		name: role.data.name,
		permissions: initializeObject(permissions),
	});

	const submit = () => {
		transform(() => ({
			...data,
			permissions: permissions.data.filter(x => data.permissions[x.name] == true)
		}))

		patch('/admin/roles/' + role.data.id)
    };

    return (
        <>
			<AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.update') }
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
