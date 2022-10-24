export default function FormError({ message }) {
    return (!message ? null :
        <div className="mt-2 text-sm text-red-500">
            { message }
        </div>
    );
}
