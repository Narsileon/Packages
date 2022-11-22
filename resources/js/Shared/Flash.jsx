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
            {/* Flash success */}
            { flash.success && visible && (
                <Message
                    className="bg-green-500 text-white"
                    icon="check"
                    message={ trans(`messages.success.${ flash.success }`) }
                    setVisible={ setVisible }
                />
            )}

            {/* Flash error */}
            { flash.error && visible && (
                <Message
                    className="bg-red-500 text-white"
                    icon="danger"
                    message={ trans(`messages.errors.${ flash.error }`) }
                    setVisible={ setVisible }
                />
            )}
        </>
    );
}

const Message = ({ icon, message, setVisible, ...props }) => {
    return (
        <section id="flash-message">
            <div { ...props}>
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
        </section>
    );
};
