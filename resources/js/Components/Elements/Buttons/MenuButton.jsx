import Icon from "@/Shared/Svg/Icon";

export default function MenuButton({ ...props }) {
    return (
        <button { ...props }>
            <Icon name="menu" />
        </button>
    );
}