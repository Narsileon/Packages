import '../css/app.css';

import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { LaravelReactI18nProvider } from 'laravel-react-i18n'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import WebLayout from './Layouts/Web/Layout.jsx';
import BackofficeLayout from './Layouts/Backoffice/Layout';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const webLayout = (page) => <WebLayout children={ page }/>
const backofficeLayout = (page) => <BackofficeLayout children={ page }/>

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => { 
        const page = resolvePageComponent(
            `./Pages/${name}.jsx`, 
            import.meta.glob('./Pages/**/*.jsx')
        );

        page.then((module) => {
            module.default.layout = 
            name.startsWith("Web/") ? module.default.layout || webLayout :
            name.startsWith("Session/") ? module.default.layout || webLayout :
            name.startsWith("Backoffice/") ? module.default.layout || backofficeLayout :
            module.default.layout;
        });

        return page;
    },
    setup({ el, App, props }) {
        return render(
            <LaravelReactI18nProvider
                lang={'fr'}
                fallbackLang={'en'}
                resolve={async (lang) => {
                    const langs = import.meta.glob('../../lang/*.json')
                    return await langs[`../../lang/${lang}.json`]()
            }}>
                <App {...props} />             
            </LaravelReactI18nProvider>, el      
        );
    },
});

InertiaProgress.init({ color: '#4B5563' });