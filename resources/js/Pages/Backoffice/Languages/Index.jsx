import { Head } from "@inertiajs/inertia-react";
import { transChoice } from "@/narsil-localization";

export default function Index() {
	return (
		<>
			<Head title={ transChoice('common.languages', 2) } />
		</>
	);
}
