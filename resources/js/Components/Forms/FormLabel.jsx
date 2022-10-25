import { t } from "@/narsil-localization";
import { upperFirst } from "lodash";

export default function FormLabel({ label }) {
    const key = label.includes('.') ? label : `validation.attributes.${ label }`;

    return (
        <label 
            htmlFor={ label }
            className="block m-1 font-semibold"
        > 
            { upperFirst(t(key)) }
        </label>
    );
}
