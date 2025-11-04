
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ArtDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

const WelcomeState: React.FC = () => (
    <div className="text-center text-gray-400">
        <div className="text-5xl mb-4">🎨</div>
        <h3 className="text-xl font-semibold text-white">Your canvas awaits</h3>
        <p>Describe a feeling, a dream, or a fleeting thought, and watch it come to life.</p>
    </div>
);

const ErrorState: React.FC<{ message: string }> = ({ message }) => (
    <div className="text-center text-red-400 bg-red-900/30 border border-red-500 p-6 rounded-lg">
        <div className="text-4xl mb-3">⚠️</div>
        <h3 className="text-xl font-semibold text-red-300">An Error Occurred</h3>
        <p>{message}</p>
    </div>
);


export const ArtDisplay: React.FC<ArtDisplayProps> = ({ imageUrl, isLoading, error }) => {
  return (
    <div className="w-full aspect-square bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 flex items-center justify-center p-4 transition-all duration-300 shadow-2xl">
      {isLoading && <LoadingSpinner />}
      {error && !isLoading && <ErrorState message={error} />}
      {!isLoading && !error && !imageUrl && <WelcomeState />}
      {imageUrl && !isLoading && !error && (
        <img
          src={imageUrl}
          alt="Generated art from thought"
          className="w-full h-full object-cover rounded-lg shadow-lg animate-fade-in"
          style={{ animation: 'fadeIn 0.5s ease-in-out' }}
        />
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};
