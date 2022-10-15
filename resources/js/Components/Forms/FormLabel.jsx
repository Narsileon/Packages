export default function FormLabel({ label }) {
    return (
        <label 
            htmlFor={ label }
            className="block m-1 uppercase font-bold text-xs"
        > 
            { label }
        </label>
    );
}
