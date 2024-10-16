import { useEffect, useState } from 'react';
import '../css/CustomCursor.css'; // Ensure you have the CSS file imported

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

    // Mouse move handler
    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    // Effect to add event listener for mousemove
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove); // Clean up on unmount
        };
    }, []);

    // Update the trailing circle position smoothly
    useEffect(() => {
        const interval = setInterval(() => {
            setTrailPosition((prev) => ({
                x: prev.x + (position.x - prev.x) * 0.1,
                y: prev.y + (position.y - prev.y) * 0.1,
            }));
        }, 16); // Roughly 60 FPS
        return () => clearInterval(interval);
    }, [position]);

    return (
        <>
            <div
                className="custom-cursor-dot"
                style={{ top: `${position.y}px`, left: `${position.x}px` }}
            />
            <div
                className="custom-cursor-trail"
                style={{ top: `${trailPosition.y}px`, left: `${trailPosition.x}px` }}
            />
        </>
    );
};

export default CustomCursor;
