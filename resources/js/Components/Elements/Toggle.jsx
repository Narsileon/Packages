import { useToggle } from "react-use";

export default function Toggle({ 
    label, 
    value, 
    baseColor="red-500",
    fillColor="green-500"
}) {
    const [ isOn, toggle ] = useToggle(value);

    return (
        <section className="flex justify-between items-center">
            <span className="text-base font-medium">
                { label }
            </span>
            <label htmlFor="toggle" className="relative inline-flex cursor-pointer">
                <input 
                    id="toggle" 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={ isOn } 
                    readOnly
                />
                <div 
                    onClick={ toggle }
                    className={
                        "w-9 h-5 rounded-full"
                        + " bg-" + baseColor
                        + " peer"
                        + " peer-checked:bg-" + fillColor
                        + " peer-checked:after:translate-x-full"
                        + " after:absolute after:top-0.5 after:left-[2px] after:h-4 after:w-4 after:bg-white after:border after:border-color after:rounded-full after:transition-all"
                    }
                >
                </div>
            </label>
        </section>
    );
}
