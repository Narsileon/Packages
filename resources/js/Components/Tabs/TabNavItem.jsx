import { upperFirst } from "lodash";

export default function TabNavItem({
    id,
    label,
    activeTab,
    setActiveTab
}) {
    return (
        <li
            className={ `mr-2 ${ activeTab === id ? "" : "" }` }
            onClick={ () => setActiveTab(id) }
        >
            <button className={ `inline-block p-4 rounded-t-lg ${ activeTab === id ? "border-b-2 border-blue-500" : "" }` }>
                { upperFirst(label) }
            </button>
        </li>
    );
}
