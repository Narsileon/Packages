import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Edit({ headerLink }) {
	const title = trans('Editing the header link:');

    const { data, setData, patch, processing, errors } = useForm({
        label: headerLink.label,
        url: headerLink.url,
		active: headerLink.active,
    });

    return (
        <>
            <AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.update') }
				submit= { () => patch('/admin/header_links/' + headerLink.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
        </>
    );
}
