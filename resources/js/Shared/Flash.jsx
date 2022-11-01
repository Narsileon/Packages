import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { trans } from "@/narsil-localization";
import CloseButton from "@/Components/Elements/Buttons/CloseButton";
import Icon from "@/Shared/Svg/Icon";

export default function Flash() {
    const [visible, setVisible] = useState(true);

    const { flash } = usePage().props;

    useEffect(() => {
        setVisible(true);
      }, [flash]);

    return (
        <>
            { flash.success && visible && (
                <Message
                    message={ trans(`messages.success.${ flash.success }`) }
                    icon="check"
                    color="bg-green-500"
                    setVisible={ setVisible }
                />
            )}

            { flash.error && visible && (
                <Message
                    message={ trans(`messages.errors.${ flash.error }`) }
                    icon="danger"
                    color="bg-red-500"
                    setVisible={ setVisible }
                />
            )}
        </>
    );
}

const Message = ({ message, icon, color, setVisible }) => {
    return (
        <div className={ `fixed bottom-4 right-4 text-white rounded ${ color }` }>
            <div className={ `relative flex items-center justify-between` }>
                <div className="flex items-center ml-2 mr-6 space-x-2">
                    <Icon
                        name={ icon }
                        className="w-6 h-6"
                    />
                    <div className="py-2">
                        { message }
                    </div>
                </div>

                <CloseButton
                    className="absolute top-0 right-0 m-1 w-4 h-4"
                    onClick={ () => setVisible(false) }
                />
            </div>
        </div>
    );
};
