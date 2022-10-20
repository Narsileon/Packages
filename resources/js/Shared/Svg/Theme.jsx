export default function Theme({ 
    theme,
    className="",
}) {
    function renderTheme() {
        switch (theme) {
            // Light
            case "light":
                return (
                    <>
                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </>
                );
            // Dark
            case "dark":
                return (
                    <>
                        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </>
                );
            default:
                return null;
        }
    }

    return (
        <svg 
            id={ `theme-${ theme }` } 
            className={ `flex-shrink-0 ${ className }` }
            fill="currentColor"
            clipRule="evenodd"
            fillRule="evenodd"  
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg"
        >
            { renderTheme() }
        </svg>
    );        
}
