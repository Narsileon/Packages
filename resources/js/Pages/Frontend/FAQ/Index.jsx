import { Head } from '@inertiajs/inertia-react';
import { transChoice } from '@/narsil-localization';
import Accordion from '@/Components/Elements/Accordion';

export default function Index({ faqs }) {
    return (
        <>
            <Head title={ transChoice('common.faqs', 2) } />

            <Accordion collection={ faqs } />
        </>
    );
}
