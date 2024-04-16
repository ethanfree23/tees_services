import React, { useRef } from 'react';
import image1 from './photos/image1.JPG'
import image2 from './photos/image2.JPG'
import image3 from './photos/image3.JPG'
import image4 from './photos/image4.JPG'
import image5 from './photos/image5.jpg'
import image6 from './photos/image6.JPG'
import image7 from './photos/image7.JPG'
import image8 from './photos/image8.JPG'
import image9 from './photos/image9.JPG'
import image10 from './photos/image10.JPG'
import image11 from './photos/image11.JPG'
import image12 from './photos/image12.JPG'
import image13 from './photos/image13.JPG'
import image14 from './photos/image14.JPG'
import image15 from './photos/image15.JPG'
import image16 from './photos/image16.JPG'
import image17 from './photos/image17.JPG'
import image18 from './photos/image18.JPG'
import image19 from './photos/image19.JPG'
import image20 from './photos/image20.JPG'
import image21 from './photos/image21.JPG'
import image22 from './photos/image22.jpg'
import image23 from './photos/image23.JPG'
import image24 from './photos/image24.jpg'

const photoArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
];

const Carousel = () => {
    // Reference to the container
    const containerRef = useRef(null);

    // Function to handle left scroll
    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -100, // Adjust the scroll distance as needed
                behavior: 'smooth',
            });
        }
    };

    // Function to handle right scroll
    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: 100, // Adjust the scroll distance as needed
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="w-screen h-1/2 flex items-center justify-center">
            {/* Left arrow */}
            <button
                className="mx-2 p-2 bg-gray-300 hover:bg-gray-400 rounded-full"
                onClick={scrollLeft}
            >
                &larr; {/* Left arrow symbol */}
            </button>

            {/* Carousel container */}
            <div
                ref={containerRef}
                className="w-[calc(5 * (18rem + 16px))] overflow-hidden"
                style={{ scrollbarWidth: 'none' }} // Hides the scrollbar
            >
                <div className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (288 + 16)}px)`,
                    }}
                >
                    {photoArray.map((photo, index) => (
                        <div key={index} className="w-72 h-72 mx-2">
                            <img
                                src={photo}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right arrow */}
            <button
                className="mx-2 p-2 bg-gray-300 hover:bg-gray-400 rounded-full"
                onClick={scrollRight}
            >
                &rarr; {/* Right arrow symbol */}
            </button>
        </div>
    );
};

export default Carousel;
