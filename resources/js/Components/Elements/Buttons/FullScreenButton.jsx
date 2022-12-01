import Icon from "@/Shared/Svg/Icon";

export default function FullScreenButton({ isFullScreen, ...props }) {
    return (
        <button { ...props }>
            <Icon name={ isFullScreen ? 'arrows_in' : 'arrows_out' } />
        </button>
    );
}
