import { Head, useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Formular from "./Formular";

export default function Edit({ headerLink }) {
	const title = trans('Edit :resource', { 'resource': transChoice('common.header_links', 1) });

    const { data, setData, patch, processing, errors } = useForm({
        label: headerLink.label,
        url: headerLink.url,
		active: headerLink.active,
    });

    return (
        <>
            <Head title={ title } />

			<Formular
				title= { title }
				label= { trans('Update') }
				submit= { () => patch('/backoffice/header_links/' + headerLink.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
        </>
    );
}
