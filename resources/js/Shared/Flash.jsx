import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { t } from "@/narsil-localization";
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
                <div className="fixed flex items-center justify-between bottom-4 right-4 p-1 bg-green-500 text-white rounded">
                    <div className="flex items-center space-x-1">
                        <Icon 
                            name="check" 
                            className="w-6 h-6" 
                        />
                        <div className="py-2">
                            { t(`messages.success.${ flash.success }`) }
                        </div>
                    </div>
                    
                    <CloseButton onClick={ () => setVisible(false) } />
                </div>
            )}

            { flash.error && visible && (
                <div className="fixed flex items-center justify-between bottom-4 right-4 bg-red-500 text-white rounded">
                    <div className="flex items-center mr-6 space-x-1">
                        <Icon 
                            name="danger" 
                            className="w-6 h-6" 
                        />
                        <div className="py-2">
                            { t(`messages.error.${ flash.success }`) }
                        </div>
                    </div>
                    
                    <CloseButton onClick={ () => setVisible(false) } />
                </div>
            )}
        </>
    );
}
