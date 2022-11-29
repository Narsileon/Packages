export default function AddButton({ size = 6, ...props }) {
    return (
        <button { ...props }>
            <svg
                className={ `w-${ size } h-${ size }` }
                viewBox="0 0 24 24"
                fill="currentColor"
                clipRule="evenodd"
                fillRule="evenodd"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" />
            </svg>
        </button>
    )
}
