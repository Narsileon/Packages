export default function DropdownPanel({ children }) {
    return (
        <div className={ `primary-background absolute overflow-auto min-w-fit mt-2 z-40 border-2 bordered rounded` }>
            <ul className="divide-y divided space-y-1">
                { children }
            </ul>
        </div>        
    );
}