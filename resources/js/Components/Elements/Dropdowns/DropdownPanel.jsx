export default function DropdownPanel({ children }) {
    return (
        <div className={ `primary-background absolute overflow-auto min-w-fit mt-2 z-40 bordered rounded` }>
            <ul className="divided-y space-y-1">
                { children }
            </ul>
        </div>        
    );
}