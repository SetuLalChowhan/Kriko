import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButton = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const updateNavButtons = () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        };

        // Add event listeners for slide change
        swiper.on('slideChange', updateNavButtons);

        // Cleanup on component unmount
        return () => {
            swiper.off('slideChange', updateNavButtons);
        };
    }, [swiper]);

    return (
        <section className="flex gap-4 mt-5 justify-center items-center">
            {/* Prev Button */}
            <button
                className={`bg-[#4877D1] text-white p-[15px] rounded-full shadow-md transition duration-300 ease-in-out transform ${isBeginning ? "opacity-50 cursor-not-allowed" : "hover:opacity-75"
                    }`}
                onClick={() => !isBeginning && swiper.slidePrev()}
                aria-label="Previous slide"
                disabled={isBeginning}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M15.8858 3.9248L3.6875 16.2211L15.8858 28.5173" stroke="white" strokeWidth="3.84142" />
                    <path d="M3.64453 16.2935H26.5281" stroke="white" strokeWidth="3.84142" />
                </svg>
            </button>

            {/* Next Button */}
            <button
                className={`bg-[#4877D1] text-white p-[15px] rounded-full shadow-md transition duration-300 ease-in-out transform ${isEnd ? "opacity-50 cursor-not-allowed" : "hover:opacity-75"
                    }`}
                onClick={() => !isEnd && swiper.slideNext()}
                aria-label="Next slide"
                disabled={isEnd}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M15.8438 3.9248L28.042 16.2211L15.8438 28.5173" stroke="white" strokeWidth="3.84142" />
                    <path d="M28.0866 16.2935H5.20312" stroke="white" strokeWidth="3.84142" />
                </svg>
            </button>
        </section>
    );
};

export default SwiperNavButton;
