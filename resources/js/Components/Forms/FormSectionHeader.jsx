import { t } from "@/narsil-localization";

export default function FormSectionHeader({ 
    title, 
}) {
    return (
        <div className="border-b-2 border-gray-500" >
            <h1 className="text-lg">
                { t(title) }
            </h1>
        </div>
    );
}

  