export default function Menu({ className }) {
    return (
        <svg 
            id="icon-menu"
            className={ `flex-shrink-0 ${ className }` } 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            aria-hidden="true"
        >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
        </svg>
    );
}
