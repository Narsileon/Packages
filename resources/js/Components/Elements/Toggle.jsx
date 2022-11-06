import { useToggle } from "react-use";

export default function Toggle({
    value,
    setData,
    baseColor="red-500",
    fillColor="green-500",
    ...props
}) {
    const [isOn, toggle] = useToggle(value)

    const onChange = (event) => {
        setData(event.target.id, event.target.checked);
    };

    return (
        <div className="flex justify-between items-center">
            <label className="relative inline-flex cursor-pointer">
                <input
                    className="sr-only peer"
                    type="checkbox"
                    checked={ isOn }
                    onChange={ onChange }
                    { ...props }
                />
                <div
                    onClick={ toggle }
                    className={`
                        w-9 h-5 rounded-full
                        bg-${ isOn ? fillColor : baseColor }
                        peer
                        peer-checked:after:translate-x-full
                        after:absolute after:top-0.5 after:left-[2px] after:h-4 after:w-4 after:bg-white after:border after:border-color after:rounded-full after:transition-all`
                    }
                />
            </label>
        </div>
    );
}
