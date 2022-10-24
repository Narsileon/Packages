export default function Icon({ 
    name,
    className="",
}) {
    function renderIcon() {
        switch (name) {
            // Calendar
            case "calendar":
                return (
                    <>
                        <path 
                            fill="transparent"  
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                    </>
                );
            // Check
            case "check":
                return (
                    <>
                        <path 
                            fill="transparent" 
                            d="M5 13l4 4L19 7" 
                        />
                    </>
                );
            // Danger
            case "danger":
                return (
                    <>
                        <path 
                            fill="transparent" 
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                        />
                    </>
                );
            // Dashboard
            case "dashboard":
                return (
                    <>
                        <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </>
                );
            // Download
            case "download":
                return (
                    <>
                        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </>
                );
            // Edit
            case "edit":
                return (
                    <>
                        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </>
                );
            // Folder
            case "folder":
                return (
                    <>
                        <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </>
                );
            // Grid
            case "grid":
                return (
                    <>
                        <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </>
                );
            // Link
            case "link":
                return (
                    <>
                        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </>
                );
            // Login
            case "login":
                return (
                    <>
                        <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </>
                );
            // Logout
            case "logout":
                return (
                    <>
                        <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </>
                );
            // Mail
            case "mail":
                return (
                    <>
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </>
                );
            // Menu
            case "menu":
                return (
                    <>
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </>
                );
            // Print
            case "print":
                return (
                    <>
                        <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </>
                );
            // QR code
            case "qr-code":
                return (
                    <>
                        <path d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </>
                );
            // Search
            case "search":
                return (
                    <>
                        <path
                            fill="transparent" 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                    </>
                );
            // Shield
            case "shield":
                return (
                    <>
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </>
                );
            // Template
            case "template":
                return (
                    <>
                        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </>
                );
            // Upload
            case "upload":
                return (
                    <>
                        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </>
                );
            // User
            case "user":
                return (
                    <>
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </>
                );
            // X
            case "x":
                return (
                    <>
                        <path d="M6 18L18 6M6 6l12 12" />
                    </>
                );
            default:
                return null;
        }
    }

    return (
        <svg 
            id={ `icon-${ name }` } 
            className={ `flex-shrink-0 ${ className }` } 
            fill="currentColor"
            clipRule="evenodd"
            fillRule="evenodd"
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg"
        >
            { renderIcon() }
        </svg>
    );        
}
