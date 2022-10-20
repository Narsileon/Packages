export default function Sort({ 
    order="none",
    className="",
}) {
    function renderSort() {
        switch (order) {
            // None
            case "none":
                return (
                    <>
                        <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" />
                    </>
                );
            // Ascending
            case "asc":
                return (
                    <>
                        <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z" />
                    </>
                );
            // Descending
            case "desc":
                return (
                    <>
                        <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" />
                    </>
                );
            default:
                return null;
        };        
    }

    return (
        <svg 
            id={ `sort-${ order }` }  
            className={ `flex-shrink-0 ${ className }` } 
            fill="currentColor" 
            clipRule="evenodd"
            fillRule="evenodd" 
            viewBox="0 0 320 512"
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg"
        >
            { renderSort() }
        </svg>
    );
}
