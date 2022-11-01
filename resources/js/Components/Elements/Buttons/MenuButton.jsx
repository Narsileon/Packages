import Icon from "@/Shared/Svg/Icon";

export default function MenuButton({ ...props }) {
    return (
        <button { ...props }>
            <Icon
                name="menu"
                className="w-6 h-6"
            />
        </button>
    );
}