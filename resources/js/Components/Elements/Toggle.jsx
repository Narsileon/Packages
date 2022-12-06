export default function Toggle({
    value,
    setData,
    baseColor="red-500",
    fillColor="green-500",
    ...props
}) {
    const onChange = (event) => {
        setData(event.target.id, event.target.checked);
    };

    return (
        <div className="flex justify-between items-center">
            <label className="relative inline-flex cursor-pointer">
                <input
                    className="sr-only peer"
                    type="checkbox"
                    checked={ value }
                    onChange={ onChange }
                    { ...props }
                />
                <div
                    className={`
                        w-9 h-5 rounded-full
                        bg-${ value ? fillColor : baseColor }
                        peer
                        peer-checked:after:translate-x-full
                        after:absolute after:top-0.5 after:left-[2px] after:h-4 after:w-4 after:bg-white after:border after:border-color after:rounded-full after:transition-all`
                    }
                />
            </label>
        </div>
    );
}
