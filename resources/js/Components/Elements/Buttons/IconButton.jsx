import Icon from "@/Shared/Svg/Icon";

export default function IconButton({ icon, size = 6, ...props }) {
    return (
        <button { ...props }>
            <Icon
                className={ `w-${ size } h-${ size }` }
                name={ icon }
            />
        </button>
    )
}
