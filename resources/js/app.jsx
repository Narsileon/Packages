import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { upperFirst } from 'lodash';
import WebLayout from '@/Shared/Layouts/Web/Layout';
import BackofficeLayout from '@/Shared/Layouts/Backoffice/Layout';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const webLayout = (page) => <WebLayout children={ page }/>
const backofficeLayout = (page) => <BackofficeLayout children={ page }/>

createInertiaApp({
    title: (title) => `${ appName }: ${ upperFirst(title) }`,
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        );

        page.then((module) => {
            module.default.layout =
            name.startsWith('Web/') ? module.default.layout || webLayout :
            name.startsWith('Session/') ? module.default.layout || webLayout :
            name.startsWith('Backoffice/') ? module.default.layout || backofficeLayout :
            module.default.layout;
        });

        return page;
    },
    setup({ el, App, props }) {
        return render(<App {...props}/>, el);
    },
});

InertiaProgress.init({ color: '#4B5563' });