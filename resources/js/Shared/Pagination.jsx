import { Link } from '@inertiajs/inertia-react';
import { t } from '@/narsil-localization';
import { clamp } from 'lodash';
import Chevron from '@/Shared/Svg/Chevron';

export default function Pagination({ data }) {
    const lastIndex = data.links.length - 1;

    let previousIndex = clamp(data.current_page - 1, 1, lastIndex - 1);
    let nextIndex = clamp(data.current_page + 1, 1, lastIndex - 1);

    return (
        <div className="flex items-center justify-between mt-8">
            <p className="text-sm">
                { t("pagination.results", {
                    "from": data.from,
                    "to": data.to,
                    "total": data.total,
                })}
            </p>
            <div className="flex inline-block space-x-1">
                <Link 
                    href={ data.links[1].url }
                    className="flex items-center"
                    key="<<"
                >
                    <Chevron direction="double-left" className="w-4 h-4" />
                </Link>
                <Link 
                    href={ data.links[previousIndex].url }
                    className="flex items-center"
                    key="<"
                >
                    <Chevron direction="left" className="w-4 h-4" />
                </Link>
                {
                    data.links.slice(1, lastIndex).map((link) => {
                        return (
                            <Link 
                                href={ link.url } 
                                className="px-1"
                                key={ link.label }
                            >
                                { link.label }
                            </Link>
                        );   
                    })
                }
                <Link 
                    href={ data.links[nextIndex].url }
                    className="flex items-center"
                    key=">"
                >
                    <Chevron direction="right" className="w-4 h-4" />
                </Link>
                <Link 
                    href={ data.links[lastIndex - 1].url }
                    className="flex items-center"
                    key=">>"
                >
                    <Chevron direction="double-right" className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
