import Icon from "@/Shared/Svg/Icon";

export default function CloseButton({ ...props }) {
    return (
        <button { ...props }>
            <Icon name="x" className="w-3 h-3" />
        </button>
    );
}   