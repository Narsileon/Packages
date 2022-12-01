import Chevron from "@/Shared/Svg/Chevron";
import { useState } from "react";

export default function Carousel({ slides }) {
    const [ index, setIndex ] = useState(0);

    function increaseIndex() {
        if (index < slides.length - 1) {
            setIndex(index + 1)
        }
    }

    function decreaseIndex() {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    function createButtons() {
        let buttons = [];

        for (let i = 0; i < slides.length; i++) {
            buttons.push(
                <button
                    type="button"
                    className={
                        "border border-white w-3 h-3 rounded-full"
                        + (index == i ? " bg-blue-500" : " bg-gray-900/30")
                    }
                    onClick={ () => setIndex(i) }
                    key={ i }
                >

                </button>
            );
        }

        return buttons;
    }

    return (
        <div className="relative flex w-fit h-fit" >
            <div className="overflow-hidden rounded-lg">
                <div>
                    <img
                        src={ slides[index].url }
                        className="relative block w-full "
                        alt="..."
                    />
                </div>
            </div>
            <div className="absolute w-full h-full z-30">
                <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-4 py-4">
                    { createButtons() }
                </div>
                <button
                    type="button"
                    className="absolute inset-y-0 left-0 px-4"
                    onClick={ decreaseIndex }
                >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900/30 hover:bg-gray-900/60">
                        <Chevron
                            className="w-4 h-4"
                            direction="left"
                        />
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-4"
                    onClick={ increaseIndex }
                >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900/30 hover:bg-gray-900/60">
                        <Chevron
                            className="w-6 h-6"
                            direction="right"
                        />
                    </span>
                </button>
            </div>
        </div>
    );
}