import { Link } from '@inertiajs/inertia-react';

export default function Pagination({ links }) {
    return (
        <div className="mt-8">
            {
                links.map((link) => {
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
        </div>
    );
}
