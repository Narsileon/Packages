export default function DE({ size="8" }) {
	return (
		<svg
			id="flag-de" 
			className={
				""
				+ " w-" + size
				+ " h-" + size
			}
			viewBox="0 0 640 480"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fill="#000000" d="M0 0h640v160H0z"/>
			<path fill="#DD0000" d="M0 160h640v160H0z"/>
			<path fill="#FFCE00" d="M0 320h640v160H0z"/>
		</svg>
	);
}
