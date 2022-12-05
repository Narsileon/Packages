import TabNavItem from "./TabNavItem";

export default function Tabs({ activeTab, setActiveTab, tabsSettings, children }) {
    return (
        <>
            {
                tabsSettings ? (
                    <>
                        <section id="tabs-header">
                            <div className="w-full h-full mb-4 border-b border-color">
                                <ul className="flex flex-wrap -mb-px font-medium text-center space-x-2">
                                    {
                                        tabsSettings.map((tab) => {
                                            return (
                                                <TabNavItem
                                                    id={ tab.id }
                                                    label={ tab.label }
                                                    activeTab={ activeTab }
                                                    setActiveTab={ setActiveTab }
                                                />
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </section>

                        <section id="tabs-content">
                            <div>
                                { children }
                            </div>
                        </section>
                    </>
                ) : null
            }
      </>
    );
}