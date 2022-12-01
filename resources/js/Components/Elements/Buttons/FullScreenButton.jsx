import Arrow from "@/Shared/Svg/Arrow";

export default function FullScreenButton({ isFullScreen, ...props }) {
    return (
        <button { ...props }>
            <Arrow name={ isFullScreen ? 'arrows_in' : 'arrows_out' } />
        </button>
    );
}
