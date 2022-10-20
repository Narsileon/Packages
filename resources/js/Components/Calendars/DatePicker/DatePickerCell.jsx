export default function DatePickerCell({ label, action, current=false, active=false }) {
    return (
        <td 
            className="
                relative
                hover:font-bold
            "
            onClick={ action }
        >
            <span className={ 
                "flex items-center justify-center aspect-square rounded-full"
                + " hover:bg-gray-300"
                + " dark:hover:bg-gray-600"
                + (current ? "" : " opacity-50")
                + (active ? " primary-button" : " hover:text-blue-500") 
            }>
                { label }
            </span>
        </td>
    );
}