
import React, { useState } from 'react';
import { Header } from './components/Header';
import { ThoughtInput } from './components/ThoughtInput';
import { ArtDisplay } from './components/ArtDisplay';
import { generateArtFromThought } from './services/geminiService';

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateArt = async (userThought: string) => {
    if (!userThought.trim() || isLoading) return;

    setIsLoading(true);
    setImageUrl(null);
    setError(null);

    try {
      const generatedImageUrl = await generateArtFromThought(userThought);
      setImageUrl(generatedImageUrl);
    } catch (e: any) {
      setError(e.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <Header />
        <main className="w-full mt-8 flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-8 flex-shrink-0">
            <ThoughtInput onSubmit={handleGenerateArt} isLoading={isLoading} />
          </div>
          <div className="w-full lg:w-2/3">
            <ArtDisplay imageUrl={imageUrl} isLoading={isLoading} error={error} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
