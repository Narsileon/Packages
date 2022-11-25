import { transChoice } from '@/narsil-localization';
import Accordion from '@/Components/Elements/Accordion';
import AppHead from '@/Shared/AppHead';

export default function Index({ faqs }) {
    return (
        <>
            <AppHead title={ transChoice('common.faqs', 2) } />

            <Accordion collection={ faqs } />
        </>
    );
}
