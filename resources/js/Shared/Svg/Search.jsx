export default function Search({ className }) {
    return (
        <svg 
            id="icon-search" 
            className={ `flex-shrink-0 ${ className }` } 
            fill="none"
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true" 
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
        </svg>
    );
}
