import PrimaryButton from "@/Components/Elements/Buttons/PrimaryButton";
import Icon from "./Svg/Icon";

export default function ModalWindow({ text, action, actionLabel, setShow }) {
    return (
        <section className="absolute primary-background border-2 bordered w-96 h-min inset-0 m-auto z-50 rounded-lg shadow-xl">
            <button 
                className="absolute top-0 right-0 p-2"
                onClick={ () => setShow(false) }
            >
                <Icon 
                    name="x"
                    className="w-4 h-4" 
                />
            </button>
            <div className="p-8 text-center">
                <h3 className="my-4">
                    { text }
                </h3>
                <div className="flex items-center justify-between">
                    <PrimaryButton 
                        label="Cancel" 
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
        </section>
    );
}
