export default function DropdownPanel({
    className="", 
    children,
}) {
    return (
        <div className={ `absolute overflow-auto min-w-fit mt-2 z-40 ${ className }` }>
            <div className="primary-background border-2 border-color rounded">
                <ul className="divide-y divide-color space-y-1">
                    { children }
                </ul>
            </div>
        </div>        
    );
}