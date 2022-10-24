import { t } from "@/narsil-localization";

export default function FormSectionHeader({ 
    title, 
}) {
    return (
        <div className="border-b-2 border-color" >
            <h1 className="text-lg">
                { t(title) }
            </h1>
        </div>
    );
}

  