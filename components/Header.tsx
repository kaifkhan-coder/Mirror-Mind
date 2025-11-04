
import React from 'react';

const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L9.8 8.2L3 10L9.8 11.8L12 18L14.2 11.8L21 10L14.2 8.2L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 18L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 6L20 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="w-full text-center py-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center gap-3">
        <SparkleIcon className="w-8 h-8"/>
        MirrorMind
      </h1>
      <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
        Translate your innermost thoughts into breathtaking works of art. What's on your mind?
      </p>
    </header>
  );
};
