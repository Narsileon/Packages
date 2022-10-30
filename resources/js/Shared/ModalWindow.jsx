import { useRef } from "react";
import { useClickAway } from "react-use";
import { t } from "@/narsil-localization";
import CloseButton from "@/Components/Elements/Buttons/CloseButton";
import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";

export default function ModalWindow({ text, action, actionLabel, setShow }) {
    const modal = useRef(null);

    useClickAway(modal, () => setShow(false));

    return (
        // Transparent background
        <section className="absolute top-0 left-0 bg-white/30 w-screen h-screen z-50">
            <div className="flex items-center h-screen w-96 m-auto">

                {/* // Modal Window */}
                <div
                    className="relative primary-background border-2 border-color align-center h-min rounded-lg shadow-xl"
                    ref={ modal }
                >
                    <CloseButton
                        className="absolute top-0 right-0 m-2 w-5 h-5"
                        onClick={ () => setShow(false) }
                    />

                    <div className="p-8 text-center">
                        {/* Content */}
                        <h3 className="my-8">
                            { text }
                        </h3>

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                            <PrimaryButton
                                label={ t("Cancel") }
                                onClick={ () => setShow(false) }
                            />
                            <PrimaryButton
                                label={ actionLabel }
                                onClick={ () => {
                                    action();
                                    setShow(false);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
