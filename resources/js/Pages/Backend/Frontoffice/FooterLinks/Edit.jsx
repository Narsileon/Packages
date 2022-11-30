import { useForm } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Edit({ footerLink }) {
	const title = trans('Editing the footer link:');

    const { data, setData, patch, processing, errors } = useForm({
        label: footerLink.label,
        url: footerLink.url,
		active: footerLink.active,
    });

    return (
        <>
            <AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.update') }
				submit= { () => patch('/admin/footer_links/' + footerLink.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
        </>
    );
}
