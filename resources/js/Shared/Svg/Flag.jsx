export default function Flag({ 
    name,
    className="", 
}) {
	function renderFlag() {
        switch (name) {
			// Bulgaria
            case "bg":
                return (
					<>
						<path fill="#D62612" d="M0 320h640v160H0z" />
						<path fill="#FFFFFF" d="M0 0h640v160H0z" />
						<path fill="#00966E" d="M0 160h640v160H0z" />	
					</>			
				);
			// Germany
            case "de":
                return (
					<>
						<path fill="#000000" d="M0 0h640v160H0z" />
						<path fill="#DD0000" d="M0 160h640v160H0z" />
						<path fill="#FFCE00" d="M0 320h640v160H0z" />
					</>			
				);
			// Denmark
			case "dk":
				return (
					<>
						<path fill="#C8102E" d="M0 0h640.1v480H0z" />
						<path fill="#FFFFFF" d="M205.7 0h68.6v480h-68.6z" />
						<path fill="#FFFFFF" d="M0 205.7h640.1v68.6H0z" />
					</>			
				);
			// United Kingdom
			case "en":
				return (
					<>
						<path fill="#012169" d="M0 0h640v480H0z" />
						<path fill="#FFFFFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
						<path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" />
						<path fill="#FFFFFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
						<path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
					</>			
				);
			// Finland
			case "fi":
				return (
					<>
						<path fill="#FFFFFF" d="M0 0h640v480H0z" />
						<path fill="#002F6C" d="M0 174.5h640v131H0z" />
						<path fill="#002F6C" d="M175.5 0h130.9v480h-131z" />
					</>			
				);	
			// France
			case "fr":
				return (
					<>
						<path fill="#FFFFFF" d="M0 0h640v480H0z" />
						<path fill="#002654" d="M0 0h213.3v480H0z" />
						<path fill="#CE1126" d="M426.7 0H640v480H426.7z" />
					</>			
				);
			// Hungary
			case "hu":
				return (
					<>
						<path fill="#FFFFFF" d="M640 480H0V0h640z" />
						<path fill="#388D00" d="M640 480H0V320h640z" />
						<path fill="#D43516" d="M640 160.1H0V.1h640z" />
					</>			
				);	
			// Italy
            case "it":
				return (
					<>
						<path fill="#FFFFFF" d="M0 0h640v480H0z" />
						<path fill="#009246" d="M0 0h213.3v480H0z" />
						<path fill="#CE2B37" d="M426.7 0H640v480H426.7z" />
					</>			
				);
			// Netherlands
			case "nl":
				return (
					<>
						<path fill="#21468b" d="M0 0h640v480H0z" />
						<path fill="#FFFFFF" d="M0 0h640v320H0z" />
						<path fill="#AE1C28" d="M0 0h640v160H0z" />
					</>			
				);
			// Norway
			case "no":
				return (
					<>
						<path fill="#ED2939" d="M0 0h640v480H0z" />
						<path fill="#FFFFFF" d="M180 0h120v480H180z" />
						<path fill="#FFFFFF" d="M0 180h640v120H0z" />
						<path fill="#002664" d="M210 0h60v480h-60z" />
						<path fill="#002664" d="M0 210h640v60H0z" />
					</>			
				);		
			// Poland
			case "pl":
				return (
					<>
						<path fill="#FFFFFF" d="M640 480H0V0h640z" />
						<path fill="#DC143C" d="M640 480H0V240h640z" />
					</>			
				);
			// Romania
			case "ro":
				return (
					<>
						<path fill="#00319C" d="M0 0h213.3v480H0z" />
						<path fill="#FFDE00" d="M213.3 0h213.4v480H213.3z" />
						<path fill="#DE2110" d="M426.7 0H640v480H426.7z" />
					</>			
				);
			// Sweden
			case "sv":
				return (
					<>
						<path fill="#005293" d="M0 0h640v480H0z" />
						<path fill="#FECB00" d="M176 0v192H0v96h176v192h96V288h368v-96H272V0h-96z" />
					</>			
				);
            default:
                return null;
        };
    }

	return (
		<svg
			id={ `flag-${ name }` }  
            className={ `flex-shrink-0 ${ className }` } 
			viewBox="0 0 640 480"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
		>
			{ renderFlag() }
		</svg>
	);
}
