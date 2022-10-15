export default function PL({ size="8" }) {
	return (
		<svg
			id="flag-pl" 
			className={
				""
				+ " w-" + size
				+ " h-" + size
			}
			viewBox="0 0 640 480"
			aria-hidden="true"
		>
			<path fill="#FFFFFF" d="M640 480H0V0h640z"/>
			<path fill="#DC143C" d="M640 480H0V240h640z"/>
		</svg>
	);
}
