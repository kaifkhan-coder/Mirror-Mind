
import React, { useState } from 'react';

interface ThoughtInputProps {
  onSubmit: (thought: string) => void;
  isLoading: boolean;
}

const LoadingSpinnerIcon: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export const ThoughtInput: React.FC<ThoughtInputProps> = ({ onSubmit, isLoading }) => {
  const [thought, setThought] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(thought);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-700">
      <form onSubmit={handleSubmit}>
        <label htmlFor="thought-input" className="block text-lg font-medium text-gray-300 mb-2">
          Your Thought
        </label>
        <textarea
          id="thought-input"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          placeholder="e.g., a city skyline at dusk made of crystal..."
          rows={5}
          className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 resize-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !thought.trim()}
          className="mt-4 w-full flex items-center justify-center font-bold py-3 px-4 rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
        >
          {isLoading ? (
            <>
              <LoadingSpinnerIcon />
              Visualizing...
            </>
          ) : (
            'Create Art'
          )}
        </button>
      </form>
    </div>
  );
};
