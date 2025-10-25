
import React, { useState } from 'react';
import type { Photo } from '../types';
import { TargetIcon } from './icons/TargetIcon';
import { GoogleGenAI, Modality } from "@google/genai";

const initialPhotos: Photo[] = [
  { id: 1, src: 'https://images.pexels.com/photos/53483/key-shooting-target-shooting-sport-53483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'A close-up of a target with bullet holes near the bullseye', category: 'Competition' },
  { id: 2, src: 'https://images.pexels.com/photos/262523/pexels-photo-262523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'A clay pigeon shattering against a clear blue sky', category: 'Action' },
  { id: 3, src: 'https://images.pexels.com/photos/7648440/pexels-photo-7648440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'A young marksman concentrating while aiming a shotgun', category: 'Training' },
  { id: 4, src: 'https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'A group of people at an outdoor shooting range', category: 'Team Photos' },
  { id: 5, src: 'https://images.pexels.com/photos/7648431/pexels-photo-7648431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'A coach assisting a junior shooter with their stance', category: 'Training' },
  { id: 6, src: 'https://images.pexels.com/photos/2879824/pexels-photo-2879824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'A pair of protective earmuffs for shooting', category: 'Safety' },
  { id: 7, src: 'https://images.pexels.com/photos/3370153/pexels-photo-3370153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'A close-up view of a classic over-under shotgun', category: 'Equipment' },
  { id: 8, src: 'https://images.pexels.com/photos/7648436/pexels-photo-7648436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'A shooter in action, ejecting a shell after a shot', category: 'Action' },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center gap-4 mb-8 justify-center">
      <TargetIcon className="h-10 w-10 text-md-red" />
      <h2 className="text-3xl md:text-4xl font-bold text-md-black text-center">{children}</h2>
    </div>
);

const Gallery: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const categories = ['All', ...Array.from(new Set(initialPhotos.map(p => p.category))), ...Array.from(new Set(photos.filter(p=>p.category === 'AI Generated').map(p => p.category)))];

    const filteredPhotos = activeCategory === 'All' 
        ? photos 
        : photos.filter(p => p.category === activeCategory);

    const handleUploadClick = () => {
        alert("Image upload functionality would be implemented here, typically involving a backend server to store the images.");
    };

    const handleGenerateImage = async () => {
      if (!prompt) {
          setError('Please enter a prompt.');
          return;
      }
      setIsGenerating(true);
      setError(null);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      try {
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
              parts: [{ text: prompt }],
            },
            config: {
                responseModalities: [Modality.IMAGE],
            },
          });
          
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              const base64ImageBytes: string = part.inlineData.data;
              const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
              
              const newPhoto: Photo = {
                  id: Date.now(),
                  src: imageUrl,
                  alt: prompt,
                  category: 'AI Generated'
              };

              setPhotos(prevPhotos => [newPhoto, ...prevPhotos]);
              setPrompt('');
              setActiveCategory('AI Generated');
              break; 
            }
          }
      } catch (e) {
          console.error(e);
          setError('Failed to generate image. Please try again.');
      } finally {
          setIsGenerating(false);
      }
    };


    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <SectionTitle>Photo Gallery</SectionTitle>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(category => (
                        <button 
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                activeCategory === category 
                                ? 'bg-md-red text-md-white' 
                                : 'bg-white text-md-black hover:bg-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredPhotos.map(photo => (
                        <div key={photo.id} className="group relative cursor-pointer" onClick={() => setSelectedImage(photo.src)}>
                            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover aspect-video rounded-lg shadow-md" loading="lazy" />
                            <div className="absolute inset-0 bg-md-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center rounded-lg">
                                <p className="text-md-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{photo.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 border-t pt-12">
                  <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
                      <div className="text-left p-6 border rounded-lg bg-white shadow-sm">
                          <h3 className="text-xl font-bold mb-4 text-md-black">Generate Image with AI</h3>
                          <p className="text-gray-600 mb-4 text-sm">Describe the image you want to create. Be as specific as you like!</p>
                          <div className="flex flex-col sm:flex-row gap-2">
                              <input
                                  type="text"
                                  value={prompt}
                                  onChange={(e) => setPrompt(e.target.value)}
                                  placeholder="A marksman hitting a bullseye"
                                  className="flex-grow p-3 border rounded-full focus:ring-2 focus:ring-md-red focus:outline-none"
                                  disabled={isGenerating}
                                  aria-label="AI Image Prompt"
                              />
                              <button
                                  onClick={handleGenerateImage}
                                  disabled={isGenerating}
                                  className="bg-md-red text-md-white font-bold py-3 px-6 rounded-full text-base uppercase hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                              >
                                  {isGenerating ? 'Generating...' : 'Generate'}
                              </button>
                          </div>
                          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                      </div>

                      <div className="text-left p-6 border rounded-lg bg-white shadow-sm">
                          <h3 className="text-xl font-bold mb-4 text-md-black">Contribute Your Photo</h3>
                           <p className="text-gray-600 mb-4 text-sm">Have a great photo from one of our events? Upload it to share with the club.</p>
                          <button onClick={handleUploadClick} className="w-full bg-md-black text-md-white font-bold py-3 px-8 rounded-full text-base uppercase hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300">
                              Upload Image
                          </button>
                           <p className="text-xs text-gray-500 mt-2 text-center">Note: For demonstration purposes only.</p>
                      </div>
                  </div>
                </div>
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-4 right-4 text-white text-4xl" aria-label="Close image view">&times;</button>
                    <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-full rounded-lg shadow-2xl" />
                </div>
            )}
        </section>
    );
};

export default Gallery;
