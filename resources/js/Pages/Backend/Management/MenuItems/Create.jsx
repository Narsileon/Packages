import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Create({
	icons,
	permissions,
	roles,
}) {
	const title = trans('Creating a new menu item:');

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

	const { data, setData, post, processing, errors } = useForm({
        slug: '',
		type: '',
		icon: '',
		label: '',
        url: '',
		roles: initializeRoles(),
		permissions: initializePermissions(),
    });

	return (
		<>
			<AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.create') }
				submit= { () => post(route('admin.menu_items.store')) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
				icons={ icons }
				roles={ roles }
				permissions={ permissions }
			/>
		</>
	);
}
