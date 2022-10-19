import { t } from "@/localization";

export default function FormLabel({ label }) {
    return (
        <label 
            htmlFor={ label }
            className="block m-1 font-semibold"
        > 
            { t(label) }
        </label>
    );
}
