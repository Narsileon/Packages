import { t } from "@/narsil-localization";
import { usePage } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function FormFooter({ label, processing }) {
	const previousLocation = usePage().props.ziggy.previousLocation;

    return (
        <div className="flex justify-between">
			<PrimaryButton 
				href={ previousLocation !== "" ? previousLocation : "#" }
				type="link"
				label={ t("Back") }
			/>
			<PrimaryButton 
				label={ label }
				processing={ processing } 
			/>
        </div>
    );
}