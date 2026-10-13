import { useState } from "react";
import "./replaceimage.css";

export default function ReplaceImage({ id, addMessage, menuStyle = "" }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setUploading(true);

    const formData = new FormData();
    formData.append("id", id);
    formData.append("photo", selectedFile);

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
        throw new Error(data.error || "Photo upload failed");
      }

      //console.log("Replaced photo:", id);
      addMessage("Photo remplacée avec succes.");
    } catch (error) {
      addMessage("Mise a jour de la photo a échoué.");
      console.error(error);
    }
  };

  return (
    <span className={`replace-menu ${menuStyle}`}>
      <label htmlFor={`replace-${id}`} className="replace-button">
        Remplacer
      </label>

      <input
        id={`replace-${id}`}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileChange}
      />
    </span>
  );
}
