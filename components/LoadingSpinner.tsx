
import React, { useState, useEffect } from 'react';

const messages = [
  "Mixing digital paints...",
  "Consulting the muses...",
  "Translating thoughts to pixels...",
  "Warming up the AI's imagination...",
  "Crafting your masterpiece...",
  "This can take a moment, great art needs patience!"
];

export const LoadingSpinner: React.FC = () => {
    const [message, setMessage] = useState(messages[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessage(prev => {
                const currentIndex = messages.indexOf(prev);
                const nextIndex = (currentIndex + 1) % messages.length;
                return messages[nextIndex];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center p-4">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-500 mx-auto mb-4"></div>
            <p className="text-lg text-white font-semibold transition-opacity duration-500">{message}</p>
            <p className="text-sm text-gray-400 mt-1">Image generation in progress...</p>
        </div>
    );
};
