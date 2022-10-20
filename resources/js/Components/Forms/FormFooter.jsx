import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import BackButton from "../Elements/Buttons/BackButton";

export default function FormFooter({ label, processing }) {
    return (
        <div className="flex justify-between">
			<BackButton className="primary-button" />
			<PrimaryButton 
				label={ label }
				processing={ processing } 
			/>
        </div>
    );
}