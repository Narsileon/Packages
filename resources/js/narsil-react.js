import { useRef } from "react";

// Use scroll
export const useScroll = () => {
    const ref = useRef(null);

    const scrollTo = () => {
        ref.current.scrollIntoView({
            behavior: 'smooth'
        });
    }
  
    return [ref, scrollTo];
};
