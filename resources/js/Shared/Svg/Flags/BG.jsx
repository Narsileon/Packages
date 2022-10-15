export default function BG({ size="8" }) {
	return (
		<svg
			id="flag-bg" 
			className={
				""
				+ " w-" + size
				+ " h-" + size
			}
			viewBox="0 0 640 480"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fill="#D62612" d="M0 320h640v160H0z"/>
			<path fill="#FFFFFF" d="M0 0h640v160H0z"/>
			<path fill="#00966E" d="M0 160h640v160H0z"/>
		</svg>
	);
}
