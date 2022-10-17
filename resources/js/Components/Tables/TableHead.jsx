import { useEffect, useState } from "react";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import pickBy from "lodash/pickBy";
import Sort from "@/Shared/Svg/Icons/Sort";

export default function TableHead({ columns }) {
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
            <tr className="divided-x">
                <th />
                { 
                    columns.map(({ label, accessor, sortable }) => {
                        return (
                            <th 
                                className="text-left"
                                key={ accessor }
                            >
                                <button 
                                    className="flex items-center w-full"
                                    onClick={ sortable ? () => handleChange(accessor) : null}
                                >
                                    <span className="p-2">
                                        { label }
                                    </span>
                                    {
                                        values.field === accessor && values.sort === "asc" ?
                                            <Sort name="asc" /> :
                                        values.field === accessor && values.sort === "desc" ?
                                            <Sort name="desc" /> :
                                            <Sort name="none" />
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