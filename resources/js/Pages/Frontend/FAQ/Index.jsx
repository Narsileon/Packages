import { Head } from '@inertiajs/inertia-react';
import { trans } from '@/narsil-localization';
import Accordion from '@/Components/Elements/Accordion';

export default function Index({ faqs }) {
    return (
        <>
            <Head title={ trans('common.faq') } />

            <Accordion collection={ faqs } />
        </>
    );
}
