import { useLaravelReactI18n } from "laravel-react-i18n";

export default function FormButton({ 
    label, 
    processing, 
    type = 'submit'
}) {
    const { t } = useLaravelReactI18n();

    return(
        <button
            type={ type }       
            disabled={ processing }
            className="px-4 py-2 primary-button"
        >
            { t(label)}
        </button>
    );
}