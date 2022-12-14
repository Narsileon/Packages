import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Create({ roles, permissions }) {
	const title = trans('Creating a new user:');

	function initializeRoles() {
		let object = {};

		roles.data.map((item) => {
			object[item.name] = false;
		});

		return object;
	}

	function initializePermissions() {
		let object = {};

		permissions.data.map((item) => {
			object[item.name] = false;
		});

		return object;
	}

	const { data, setData, transform, post, processing, errors } = useForm({
        username: '',
        email: '',
		password: '',
		password_confirmation: '',
		last_name: '',
		first_name: '',
		roles: initializeRoles(),
		permissions: initializePermissions(),
    });

	const submit = () => {
		transform(() => ({
			...data,
			roles: roles.data.filter(x => data.roles[x.name] == true),
			permissions: permissions.data.filter(x => data.permissions[x.name] == true),
		}))

        post(route('admin.users.store'));
    };

	return (
		<>
			<AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.create') }
				submit= { submit }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
				roles={ roles }
				permissions={ permissions }
			/>
		</>
	);
}
