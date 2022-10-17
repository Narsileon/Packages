import AccordionHeader from "./AccordionHeader";

export default function Accordion({ items }) {
    return (
        <div className="bordered divided-y rounded">
            {
                items.data.map(({ id, header, content }) => {
                    return (
                        <AccordionHeader 
                            question={ header }
                            key={ id }
                        >
                            <div className="p-4 text-left">
                                { content }
                            </div>
                        </AccordionHeader>
                    );
                }) 
            }
        </div>
    );
}
