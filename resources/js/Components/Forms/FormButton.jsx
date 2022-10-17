export default function FormButton({ 
    label, 
    processing, 
    type = 'submit'
}) {
    return(
        <button
            type={ type }       
            disabled={ processing }
            className="primary-button"
        >
            { label }
        </button>
    );
}