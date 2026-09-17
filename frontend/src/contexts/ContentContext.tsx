import { useEffect, useState, createContext, useContext } from "react";
import type { ReactNode } from "react";

type ContentItem = {
  id: number;
  location: string;
  content: string;
};

type PhotoItem = {
  id: number;
  location: string;
  name: string;
};

type ContentContextType = {
  content: ContentItem[] | null;
  photos: PhotoItem[] | null;
};

type ContentProviderProps = {
  children: ReactNode;
};

const ContentContext = createContext<ContentContextType | null>(null);

export const useContent = () => {
  return useContext(ContentContext);
};

export const ContentProvider = ({ children }: ContentProviderProps) => {
  const [content, setContent] = useState<ContentItem[] | null>(null);
  const [photos, setPhotos] = useState<PhotoItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contentResponse, photosResponse] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/content/`),
          fetch(`${import.meta.env.VITE_API_URL}/photos/`),
        ]);

        if (!contentResponse.ok) {
          throw new Error("Erreur fetch content");
        }

        if (!photosResponse.ok) {
          throw new Error("Erreur fetch photos");
        }

        const [contentData, photosData] = await Promise.all([
          contentResponse.json(),
          photosResponse.json(),
        ]);

        setContent(contentData);
        setPhotos(photosData);

        localStorage.setItem(
          "content",
          JSON.stringify({
            storedExpiration: Date.now() + 100000000,
            storedContent: contentData,
          }),
        );

        localStorage.setItem(
          "photos",
          JSON.stringify({
            storedExpiration: Date.now() + 100000000,
            storedContent: photosData,
          }),
        );
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <ContentContext.Provider value={{ content, photos }}>
      {children}
    </ContentContext.Provider>
  );
};
