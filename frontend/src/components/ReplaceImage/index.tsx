import { useState } from "react";
import "./replaceimage.css";

export default function ReplaceImage({ id, addMessage }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const submitImage = async (e) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected");
      addMessage("Veuillez selectionner un fichier.");
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("photo", file);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/photos/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        addMessage("Mise a jour de la photo a échoué.");
        throw new Error(data.error || "Photo upload failed");
      }

      //console.log("Replaced photo:", id);
      addMessage("Photo remplacée avec succes.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="replace-menu">
      <label htmlFor={`replace-${id}`} className="replace-button">
        Remplacer
      </label>

      <input
        id={`replace-${id}`}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileChange}
      />

      {file && (
        <button type="button" className="confirm-replace" onClick={submitImage}>
          ✓
        </button>
      )}
    </div>
  );
}
