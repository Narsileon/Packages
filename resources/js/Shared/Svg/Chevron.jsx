export default function Chevron({
    direction="down",
    className="",
}) {
    function renderChevron() {
        switch (direction) {
            // Up
            case "up":
                return (
                    <>
                        <path d="M5 15l7-7 7 7" />
                    </>
                );
            // Right
            case "right":
                return (
                    <>
                        <path d="M9 5l7 7-7 7" />
                    </>
                );
            // Down
            case "down":
                return (
                    <>
                        <path d="M19 9l-7 7-7-7" />
                    </>
                );
            // Left
            case "left":
                return (
                    <>
                        <path d="M15 19l-7-7 7-7" />
                    </>
                );
            // Double left
            case "double-left":
                return (
                    <>
                        <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </>
                );
            // Double right
            case "double-right":
                return (
                    <>
                        <path d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </>
                );
            default:
                return null;
        };
    }

    return (
        <svg
            id={ `chevron-${ direction }` }
            className={ `flex-shrink-0 ${ className }` } 
            fill="transparent"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3"
            viewBox="0 0 24 24" 
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
        >
            { renderChevron() }
        </svg>
    );
}
