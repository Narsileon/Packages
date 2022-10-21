import { t } from "@/narsil-localization";
import { upperFirst } from "lodash";

export default function FormLabel({ label }) {
    return (
        <label 
            htmlFor={ label }
            className="block m-1 font-semibold"
        > 
            { upperFirst(t(`validation.attributes.${ label }`)) }
        </label>
    );
}
