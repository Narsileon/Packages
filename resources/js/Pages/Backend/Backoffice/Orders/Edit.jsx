import { useForm } from "@inertiajs/inertia-react";
import { trans, transChoice } from "@/narsil-localization";
import AppHead from "@/Shared/AppHead";
import Formular from "./Formular";

export default function Edit({ order }) {
	const title = trans('Edit :resource', { 'resource': transChoice('common.orders', 1) });

    const { data, setData, patch, processing, errors } = useForm({
        type: order.type,
        status: order.status,
    });

    return (
        <>
            <AppHead title={ title } />

			<Formular
				title= { title }
				label= { trans('common.update') }
				submit= { () => patch('/admin/orders/' + order.id) }
				data={ data }
				setData={ setData }
				processing={ processing }
				errors={ errors }
			/>
        </>
    );
}
