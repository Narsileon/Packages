import { Link } from '@inertiajs/inertia-react';
import { t } from '@/narsil-localization';
import { clamp } from 'lodash';
import Chevron from '@/Shared/Svg/Chevron';

export default function Pagination({ data }) {
    const lastIndex = data.links.length - 1;

    let previousIndex = clamp(data.current_page - 1, 1, lastIndex - 1);
    let nextIndex = clamp(data.current_page + 1, 1, lastIndex - 1);

    return (
        <div className="flex items-center justify-between mt-4">
            <Results data={ data } />

            <div className="flex inline-block border border-gray-500 divide-x divide-color rounded">
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
    );
}

const Results = ({ data }) => {
    return(
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
