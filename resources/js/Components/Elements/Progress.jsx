export default function Progress({ 
    label, 
    progress,
    size="3",
    baseColor="gray-300",
    darkColor="gray-700",
    fillColor="blue-500",
}) {
    return (
        <section>
            <div className="flex justify-between items-center mb-2">
                <span className="text-base font-medium">
                    { label }
                </span>
                <span className="text-base font-medium">
                    { progress }
                </span>
            </div>
            <div 
                className={ 
                    "w-full rounded-full" 
                    + " h-" + size
                    + " bg-" + baseColor
                    + " dark:bg-" + darkColor
                }
            >
                <div 
                    className={ 
                        "rounded-full"
                        + " h-" + size 
                        + " bg-" + fillColor 
                    } 
                    style={{ width: progress }} 
                />
            </div>
        </section>
    );
}