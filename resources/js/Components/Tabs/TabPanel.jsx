export default function TabPanel({
    id,
    activeTab,
    children
}) {
    return (
        activeTab === id ? (
            <div>
                { children }
            </div>
        ) : null
    );
}
