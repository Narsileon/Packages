export default function Chevron({
    direction="down",
    className="",
}) {
    function renderChevron() {
        switch (direction) {
            case "up":
                return (
                    <>
                        <path d="M5 15l7-7 7 7" />
                    </>
                );
            case "right":
                return (
                    <>
                        <path d="M9 5l7 7-7 7" />
                    </>
                );
            case "down":
                return (
                    <>
                        <path d="M19 9l-7 7-7-7" />
                    </>
                );
            case "left":
                return (
                    <>
                        <path d="M15 19l-7-7 7-7" />
                    </>
                );
            case "double-left":
                return (
                    <>
                        <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </>
                );
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
