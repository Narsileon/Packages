import { useSort } from "@/narsil-react";
import { trans } from "@/narsil-localization";
import SortButton from "@/Components/Elements/Buttons/SortButton";

export default function TableHead({ data }) {
	const [values, handleChange] = useSort();

    return (
        <thead className="
            bg-gray-400
            dark:bg-gray-800
        ">
            <tr className="divide-x divide-color">
                <th className="w-16"/>
                {
                    data[0] != null && Object.keys(data[0]).map((key) => {
                        return (
                            <th
                                className="text-left min-w-sm max-w-lg"
                                key={ key }
                            >
                                <SortButton
                                    label={ trans(`validation.attributes.${ key }`) }
                                    accessor={ key }
                                    field={ values.field }
                                    order={ values.sort }
                                    onClick={ () => handleChange(key) }
                                />
                            </th>
                        );
                    })
                }
            </tr>
       </thead>
    );
}