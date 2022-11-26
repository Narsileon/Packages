import Arrow from "@/Shared/Svg/Arrow";

export default function FullScreenButton({ isFullScreen, ...props }) {
    return (
        <button { ...props }>
            <Arrow
                className="w-6 h-6"
                name={ isFullScreen ? 'arrows_in' : 'arrows_out' }
            />
        </button>
    );
}
