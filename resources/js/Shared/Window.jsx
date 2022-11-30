export default function Window({
    height = 'h-96',
    width = 'w-96',
    children
}) {
    return (
        <div className={ `fixed inset-x-0 inset-y-0 mx-auto my-auto overflow-y-auto z-50 ${ width } ${ height }` }>
            { children }
        </div>
    );
}
