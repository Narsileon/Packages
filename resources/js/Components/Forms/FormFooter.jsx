import BackButton from "@/Components/Elements/Buttons/BackButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

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