export default function FormLabel({ label }) {
    return (
        <label 
            htmlFor={ label }
            className="block m-1 font-semibold"
        > 
            { label }
        </label>
    );
}
