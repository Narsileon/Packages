import { upperFirst } from "lodash";

export default function Text({
    label,
    value,
}) {
    return (
        <div className="flex justify-between">
            <span>
                { `${ upperFirst(label) }:` }
            </span>
            <span>
                { value }
            </span>
        </div>
    );
}