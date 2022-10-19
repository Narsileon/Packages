export default function FormHeader({ title, children }) {
    return (
        <>
            <h1 className="flex text-xl justify-center font-bold">
                { title }    
            </h1>

            { children }
        </>
    );
}