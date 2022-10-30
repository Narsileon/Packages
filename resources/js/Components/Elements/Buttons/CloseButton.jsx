import Icon from "@/Shared/Svg/Icon";

export default function CloseButton({ ...props }) {
    return (
        <button { ...props }>
            <Icon name="x" className="w-max h-max" />
        </button>
    );
}