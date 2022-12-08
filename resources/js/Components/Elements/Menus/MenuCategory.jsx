import { useToggle } from "react-use";
import { transChoice } from "@/narsil-localization";
import { upperFirst } from "lodash";
import Chevron from "@/Shared/Svg/Chevron";
import Icon from "@/Shared/Svg/Icon";

export default function MenuCategory({
    menuItem,
    visibility=false,
    children,
}) {
    const [show, setShow] = useToggle(visibility);

    return (
        !('active' in menuItem) || menuItem.active ? (
            <ul>
                <button
                    className="flex items-center justify-between w-full"
                    onClick={ setShow }
                >
                    <div className="flex items-center selectable p-1 space-x-2">
                        <Icon name={ menuItem.icon } />
                        <h1>
                            { upperFirst(transChoice(menuItem.label.value, menuItem.label.plural ? 2 : 1)) }
                        </h1>
                    </div>
                    <div>
                        <Chevron
                            className="w-5 h-5"
                            direction={ show ? 'up' : 'down' }
                        />
                    </div>
                </button>

                <div className="ml-8">
                    { show ? children : null }
                </div>
            </ul>
        ) : null
    );
}
