import Chevron from '@/Shared/Svg/Chevron';

export default function FrontendPagination({ table }) {
    return (
        <section id="pagination">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mt-4">
                <div className="md:order-2 place-self-end">
                    <div className="flex md:justify-items-end border border-gray-500 w-fit divide-x divide-color rounded">
                        <PaginationButton
                            onClick={ () => table.setPageIndex(0) }
                            disabled={ !table.getCanPreviousPage() }
                            key="first"
                        >
                            <Chevron direction="double-left" className="w-4 h-4" />
                        </PaginationButton>
                        <PaginationButton
                            onClick={ () => table.previousPage() }
                            disabled={ !table.getCanPreviousPage() }
                            key="previous"
                        >
                            <Chevron direction="left" className="w-4 h-4" />
                        </PaginationButton>
                        <PaginationButton
                            onClick={ () => table.nextPage() }
                            disabled={ !table.getCanNextPage() }
                            key="next"
                        >
                            <Chevron direction="right" className="w-4 h-4" />
                        </PaginationButton>
                        <PaginationButton
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            disabled={!table.getCanNextPage()}
                            key="last"
                        >
                            <Chevron direction="double-right" className="w-4 h-4" />
                        </PaginationButton>
                    </div>
                </div>
                <div className="md:order-1 place-self-end md:place-self-start self-center">

                </div>
            </div>
        </section>
    );
}

const PaginationButton = ({ children, ...props }) => {
    return(
        <button
            className="selectable flex items-center py-1 px-2"
            { ...props }
        >
            { children }
        </button>
    );
}
