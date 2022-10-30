import { Head } from '@inertiajs/inertia-react';
import { t } from '@/narsil-localization';
import Accordion from '@/Components/Elements/Accordion';

export default function Index({ faqs }) {
    return (
        <>
            <Head title={ t('FAQ') } />

            <Accordion collection={ faqs } />
        </>
    );
}
