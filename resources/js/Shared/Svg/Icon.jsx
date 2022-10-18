export default function Icon({ 
    name,
    className="",
}) {
    function renderIcon() {
        switch (name) {
            case "dashboard":
                return (
                    <>
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </>
                );
            case "user":
                return (
                    <>
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />;
                    </>
                );
            default:
                return null;
        }
    }

    return (
        <svg 
            id={ `icon-${ name }` } 
            className={ `flex-shrink-0 ${ className }` } 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg"
        >
            { renderIcon() }
        </svg>
    );        
}
