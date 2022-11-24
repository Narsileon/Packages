import TableSearch from "@/Components/Tables/TableFilter";

export default function TableHeader({
    title,
    table,
    children,
}) {
    return (
        <section id="table-header">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-0 content-start place-content-between">
                <div className="col-span-1 self-center place-self-start">
                    <span className="text-xl">
                        { title }
                    </span>
                </div>
                <div className="flex items-center space-x-2 col-span-1 md:order-2 self-center place-self-end">
                    { children }
                </div>

                <div className="col-span-1 sm:col-span-2 md:col-span-1 md:order-1 place-self-center w-full">
                    <TableSearch
                        value={ table.getState().globalFilter ?? '' }
                        onChange={ (value) => table.setGlobalFilter(value) }
                    />
                </div>
            </div>
        </section>
    );
}