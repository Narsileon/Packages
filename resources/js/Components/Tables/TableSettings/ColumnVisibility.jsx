import { trans, transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";

export default function ColumnVisibility({ table }) {
    return (
        <>
            <h1 className="whitespace-nowrap">
                { upperFirst(transChoice('common.columns', 2)) + trans(':') }
            </h1>

            <div>
                {
                    table.getAllLeafColumns().map(column => {
                        return (
                            column.columnDef.header ? (
                                <div
                                    className="flex px-1 whitespace-nowrap"
                                    key={ column.id }
                                >
                                    <label className="flex space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={ column.getIsVisible() }
                                            onChange={ column.getToggleVisibilityHandler() }
                                        />
                                        <span>
                                            { column.columnDef.header ? upperFirst(transChoice(column.columnDef.header, 1)) : null }
                                        </span>
                                    </label>
                                </div>
                            ) : null
                        )
                    })
                }
            </div>
        </>
    );
}
