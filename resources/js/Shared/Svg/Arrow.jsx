export default function Arrow({
    direction="down",
    className="",
}) {
    function getRotation() {
        switch (direction) {
            case "up":
                return "rotate-180";
            case "right":
                return "-rotate-90";  
            case "down":
                return "rotate-0";
            case "left":
                return "rotate-90";
            default:
                return null;
        };
    }

    return (
        <svg
            id={ `icon-arrow-${ direction }` }
            className={ `flex-shrink-0 ${ getRotation() } ${ className }` } 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
    );
}
