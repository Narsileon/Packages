import Accordion from '@/Components/Elements/Accordion';

export default function Index({ faqs }) {
    return (
        <>
            <Accordion collection={ faqs } />
        </>
    );
}
