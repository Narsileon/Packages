import { upperFirst } from "lodash";

export default function TabNavItem({
    id,
    label,
    activeTab,
    setActiveTab
}) {
    function onClick(event) {
        event.preventDefault();

        setActiveTab(id);
    }

    return (
        <li
            className={ `mr-2 ${ activeTab === id ? "" : "" }` }
        >
            <button
                className={ `inline-block p-4 rounded-t-lg ${ activeTab === id ? "border-b-2 border-blue-500" : "" }` }
                onClick={ onClick }
            >
                { upperFirst(label) }
            </button>
        </li>
    );
}
