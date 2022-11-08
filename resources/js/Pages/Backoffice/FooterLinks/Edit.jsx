import { Head, useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import Formular from "./Formular";

export default function Edit({ footerLink }) {
	const title = trans('Edit :resource', { 'resource': transChoice('common.footer_links', 1) });

    const { data, setData, patch, processing, errors } = useForm({
        label: footerLink.label,
        url: footerLink.url,
		active: footerLink.active,
    });

    return (
        <>
            <Head title={ title } />

			<Formular
				title= { title }
				label= { trans('Update') }
				submit= { () => patch('/backoffice/footer_links/' + footerLink.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
        </>
    );
}
