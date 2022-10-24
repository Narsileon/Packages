export default function DropdownPanel({ children }) {
    return (
        <div className={ `primary-background absolute overflow-auto min-w-fit mt-2 z-40 border-2 border-color rounded` }>
            <ul className="divide-y divide-color space-y-1">
                { children }
            </ul>
        </div>        
    );
}