import { Arrow } from "@/Shared/Svg/Arrow"
import { useToggle } from "react-use"

export default function AccordionHeader({ header, children }) {
    const [show, toggle] = useToggle(false)

    return (
        <div className="divided-y">
            <h1>
                <button 
                    type="button" 
                    className="
                        flex items-center justify-between w-full p-4 text-left
                        bg-gray-500
                        dark:bg-gray-700
                    "
                    onClick={ toggle }
                >
                    <span>
                        { question }
                    </span>
                    <Arrow direction={ show ? "up" : "down" } />
                </button>
            </h1> 
            { show ? null : 
                <div>
                    { children }
                </div>     
            }  
        </div>
    )
}
