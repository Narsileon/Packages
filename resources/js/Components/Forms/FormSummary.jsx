import { trans } from "@/narsil-localization";

export default function FormSummary({ children }) {
    return (
        <nav className="sticky top-4 h-full mx-4">
            <p>
                { trans("Sections") }
            </p>
            <ul className="p-2">
                { children }
            </ul>
        </nav>
    );
}