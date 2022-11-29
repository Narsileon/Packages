import { useState } from "react";
import Chevron from "@/Shared/Svg/Chevron";

export default function Accordion({ collection }) {
    const values = {};

    collection.data.map(({ id }) => {
        values[id] = false;
    });

    const [items, setItems] = useState(values);

    return (
        <div className="border-2 border-color divide-y divide-color rounded">
            {
                collection.data.map(({ id, question, answer }) => {
                    return (
                        <div
                            className="divide-y divide-color"
                            key={ id }
                        >
                            <h1>
                                <button
                                    type="button"
                                    className="
                                        primary-background flex items-center justify-between w-full p-4 text-left
                                    "
                                    onClick={ () => setItems({ ...items, [id]: !items[id] }) }
                                >
                                    <span>
                                        { question }
                                    </span>
                                    <Chevron direction={ items[id] ? "up" : "down" } className="w-6 h-6" />
                                </button>
                            </h1>
                            {
                                items[id] ? (
                                    <div className="bg-gray-100 dark:bg-gray-800">
                                        <div className="p-4 text-left">
                                            { answer }
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}
