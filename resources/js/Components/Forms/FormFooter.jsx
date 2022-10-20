import { t } from "@/narsil-localization";
import PrimaryButton from "../Elements/Buttons/PrimaryButton";

export default function FormFooter({ href, label, processing }) {
    return (
        <div className="flex justify-between">
			<PrimaryButton 
				href={ href }
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