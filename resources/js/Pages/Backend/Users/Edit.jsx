import { Head, useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Formular from "./Formular";

export default function Edit({ user, roles, permissions }) {
	const title = trans('Edit :resource', {'resource': transChoice('common.users', 1)});

	function initializeRoles() {
		let object = {};

		roles.data.map((item) => {
			object[item.name] = user.data.roles.some(x => x.id === item.id);
		});

		return object;
	}

	function initializePermissions() {
		let object = {};

		permissions.data.map((item) => {
			object[item.name] = user.data.permissions.some(x => x.id === item.id);
		});

		return object;
	}

    const { data, setData, transform, patch, processing, errors } = useForm({
        username: user.data.username,
        email: user.data.email,
		password: user.data.password,
        last_name: user.data.last_name,
        first_name: user.data.first_name,
		roles: initializeRoles(),
		permissions: initializePermissions(),
    });

	const submit = () => {
		transform(() => ({
			...data,
			roles: roles.data.filter(x => data.roles[x.name] == true),
			permissions: permissions.data.filter(x => data.permissions[x.name] == true),
		}))

        patch('/admin/users/' + user.data.id);
    };

    return (
        <>
            <Head title={ title } />

			<Formular
				title= { title }
				label= { trans('common.update') }
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
