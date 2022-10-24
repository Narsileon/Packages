import Icon from "@/Shared/Svg/Icon";

export default function CloseButton({ ...props }) {
    return (
        <button 
            className="absolute top-0 right-0 p-2"
            { ...props }
        >
            <Icon name="x" className="w-4 h-4" />
        </button>
    );
}   