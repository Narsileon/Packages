import { Link } from '@inertiajs/inertia-react';
import { trans } from '@/narsil-localization';
import { clamp } from 'lodash';
import Chevron from '@/Shared/Svg/Chevron';

export default function Pagination({ data }) {
    const lastIndex = data.links.length - 1;

    let previousIndex = clamp(data.current_page - 1, 1, lastIndex - 1);
    let nextIndex = clamp(data.current_page + 1, 1, lastIndex - 1);

    return (
        <section
            id="pagination"
            className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mt-4"
        >
            <div
                id="pagination-links"
                className="md:order-2 md:place-self-end"
            >
                <div className="flex md:justify-items-end border border-gray-500 w-fit divide-x divide-color rounded">
                    <div className="flex">
                    <PaginationButton
                        href={ data.links[1].url }
                        key="<<"
                    >
                        <Chevron direction="double-left" className="w-4 h-4" />
                    </PaginationButton>
                    <PaginationButton
                        href={ data.links[previousIndex].url }
                        key="<"
                    >
                        <Chevron direction="left" className="w-4 h-4" />
                    </PaginationButton>
                    {
                        data.links.slice(1, lastIndex).map((link) => {
                            return (
                                <PaginationButton
                                    href={ link.url }
                                    key={ link.label }
                                >
                                    { link.label }
                                </PaginationButton>
                            );
                        })
                    }
                    <PaginationButton
                        href={ data.links[nextIndex].url }
                        key=">"
                    >
                        <Chevron direction="right" className="w-4 h-4" />
                    </PaginationButton>
                    <PaginationButton
                        href={ data.links[lastIndex - 1].url }
                        key=">>"
                    >
                        <Chevron direction="double-right" className="w-4 h-4" />
                    </PaginationButton>
                    </div>
                </div>
            </div>

            <div
                id="pagination-results"
                className="md:order-1 self-center"
            >
                <p className="text-sm">
                    { data.total > 0 ? (
                        t("pagination.results", {
                            "from": data.from,
                            "to": data.to,
                            "total": data.total,
                        })
                    ) : (
                        t("pagination.empty")
                    )}
                </p>
            </div>
        </section>
    );
}

const PaginationButton = ({ children, ...props }) => {
    return(
        <Link
            className="selectable flex items-center py-1 px-2 aspect-square"
            { ...props }
        >
            { children }
        </Link>
    );
}
