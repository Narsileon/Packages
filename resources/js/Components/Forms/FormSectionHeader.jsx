import { upperFirst } from "lodash";

export default function FormSectionHeader({
    title,
}) {
    return (
        <div className="border-b-2 border-color" >
            <h1 className="p-2 text-lg">
                { upperFirst(title) }
            </h1>
        </div>
    );
}

