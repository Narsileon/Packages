import { useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
import { upperFirst } from "lodash";
import pickBy from "lodash/pickBy";
import Sort from "@/Shared/Svg/Sort";

export default function TableHead({ data }) {
    const [values, setValues] = useState({
        field: '',
        sort: 'asc',
    });

    const previousValues = usePrevious(values);

    let href = usePage().url;

    const handleChange = (accessor) => {
        setValues(values => ({
            ...values,
            ['field']: accessor,
            ['sort']: accessor === values.field && values.sort === "asc" ? "desc" : "asc",
        }));
    };

    useEffect(() => {
        if (previousValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : { remember: 'forget' };
            Inertia.get(href, query, {
                replace: true,
                preserveState: true
            });
        }
    }, [values]);

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
                                <button
                                    className="flex items-center m-2"
                                    onClick={ () => handleChange(key) }
                                >
                                    <span className="p-2">
                                        { upperFirst(t(`validation.attributes.${ key }`)) }
                                    </span>
                                    {
                                        <Sort
                                            className="w-4 h-4"
                                            order={
                                                values.field === key && values.sort === "asc" ?
                                                "asc" :
                                                values.field === key && values.sort === "desc" ?
                                                "desc" : "none"
                                            }
                                        />
                                    }
                                </button>
                            </th>
                        );
                    })
                }
            </tr>
       </thead>
    );
}