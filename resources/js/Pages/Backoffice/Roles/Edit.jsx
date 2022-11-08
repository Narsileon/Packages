import { Head, useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Formular from "./Formular";

export default function Edit({ role, permissions }) {
	const title = trans('Edit :resource', { 'resource':transChoice('permissions.roles', 1) });

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

		patch('/backoffice/roles/' + role.data.id)
    };

    return (
        <>
			<Head title={ title } />

			<Formular
				title= { title }
				label= { trans('Update') }
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
