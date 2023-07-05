'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface CatImage {
  id: string;
  url: string;
}

const RandomCatImage: React.FC = () => {
  const [catImage, setCatImage] = useState<CatImage | null>(null);

  useEffect(() => {
    const fetchRandomCatImage = async () => {
      try {
        const apiKey = 'YOUR_API_KEY';
        const apiUrl = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data: CatImage[] = await response.json();

        if (data && data.length > 0) {
          setCatImage(data[0]);
        }
      } catch (error) {
        console.error('Error fetching cat image:', error);
      }
    };

    fetchRandomCatImage();
  }, []);

  return (
    <div>
      {catImage ? (
        <Image src={catImage.url} alt="Random Cat" width={300} height={200} />
      ) : (
        <span className="loading loading-dots loading-lg"></span>
      )}
    </div>
  );
};

export default RandomCatImage;
