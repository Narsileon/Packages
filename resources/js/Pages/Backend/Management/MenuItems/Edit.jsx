import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Edit({
	icons,
	menuItem,
	permissions,
	roles,
}) {
	const title = trans('Editing the menu item:');

	function initializeRoles() {
		let object = {};

		roles.data.map((item) => {
			object[item.name] = menuItem.data.roles.some(x => x.id === item.id);
		});

		return object;
	}

	function initializePermissions() {
		let object = {};

		permissions.data.map((item) => {
			object[item.name] = menuItem.data.permissions.some(x => x.id === item.id);
		});

		return object;
	}

    const { data, setData, patch, processing, errors } = useForm({
		active: menuItem.data.active,
		slug: menuItem.data.slug,
		type: menuItem.data.type,
		icon: menuItem.data.icon,
		label: menuItem.data.label,
        url: menuItem.data.url,
		roles: initializeRoles(),
		permissions: initializePermissions(),
    });

    return (
        <>
            <AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.update') }
				submit= { () => patch(route('admin.menuItems.update', menuItem.data.id)) }
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
