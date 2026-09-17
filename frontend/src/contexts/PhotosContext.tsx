import { useEffect, useState, createContext, useContext } from "react";
import type { ReactNode } from "react";

type PhotosProviderProps = {
  children: ReactNode;
};

const ContentContext = createContext(null);

export const useContent = () => {
  return useContext(ContentContext);
};

export const ContentProvider = ({ children }: ContentProviderProps) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // console.log("API URL " + import.meta.env.VITE_API_URL);
    // const stored = localStorage.getItem("settings");
    /*     const stored = null; // forcer le chargement de la DB

    if (stored) {
      const { storedSetting, storedExpiration } = JSON.parse(stored);
      if (Date.now() < storedExpiration) {
        setSettings(storedSetting);
        return;
      } else {
        localStorage.removeItem("settings");
      }
    } */
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/content/",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );

        if (!response.ok) throw new Error("Erreur fetch content");

        const res = await response.json();

        /* console.log(" RES", res);

        const contentObject = res.reduce((acc, item) => {
          acc[item.location] = item.content;
          return acc;
        }, {});
 */
        localStorage.setItem(
          "content",
          JSON.stringify({
            storedExpiration: Date.now() + 100000000,
            storedContent: res,
          }),
        );

        setContent(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};
