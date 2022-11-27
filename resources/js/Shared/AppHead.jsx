import { Head, usePage } from '@inertiajs/inertia-react'
import { upperFirst } from 'lodash';

export default function AppHead({ title, children }) {
    const name = usePage().props.shared.settings.app.name

    return (
        <Head>
            <title>
                { title ? `${ name } - ${ upperFirst(title) }` : name }
            </title>
            { children }
        </Head>
    );
}
