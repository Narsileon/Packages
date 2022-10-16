export default function FormButton({ 
    label, 
    processing, 
    type = 'submit'
}) {
    return(
        <button
            type={ type }       
            disabled={ processing }
            className="px-4 py-2 primary-button"
        >
            { label }
        </button>
    );
}