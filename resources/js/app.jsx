import { render } from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import FrontendLayout from '@/Shared/Layouts/Frontend/Layout';
import BackendLayout from '@/Shared/Layouts/Backend/Layout';

const frontendLayout = (page) => <FrontendLayout children={ page }/>
const backendLayout = (page) => <BackendLayout children={ page }/>

createInertiaApp({
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        );

        page.then((module) => {
            module.default.layout =
            name.startsWith('Frontend/') ? module.default.layout || frontendLayout :
            name.startsWith('Session/') ? module.default.layout || frontendLayout :
            name.startsWith('Backend/') ? module.default.layout || backendLayout :
            module.default.layout;
        });

        return page;
    },
    setup({ el, App, props }) {
        return render(
            <DndProvider backend={ HTML5Backend }>
                <App {...props} />
            </DndProvider>
        , el);
    },
});

InertiaProgress.init({ color: '#4B5563' });