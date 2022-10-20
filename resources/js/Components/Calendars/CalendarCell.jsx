import { Link } from "@inertiajs/inertia-react";

export default function CalendarCell({ label, action, tasks, current=true, active=false }) {
    return (
        <td 
            className="
                relative overflow-hidden
                hover:secondary-background hover:font-bold
            "
            onClick={ action }
        >
            <div className="absolute top-0 left-0">
                <div className={ 
                        "flex items-center justify-center w-8 h-8 m-1 rounded-full"
                        + (current ? " opacity-100" : " opacity-50")
                        + (active ? " bg-blue-500" : "") 
                }>
                    <p>
                        { label }
                    </p>
                </div>            
            </div>
            <div className="absolute top-0 right-0">
                <Link 
                    className="
                        flex items-center justify-center w-4 h-4 m-1 rounded-full
                        bg-blue-500 text-white
                    "
                >
                    +
                </Link>
            </div>
        </td>
    );
}