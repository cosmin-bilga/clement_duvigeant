import { useState } from "react";
import "./index.css";

export default function AddImage({ location, addMessage }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setUploading(true);

    const formData = new FormData();
    formData.append("location", location);
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

      console.log("Uploaded photo:", location);
      addMessage("Photo ajouté avec succes.");
    } catch (error) {
      addMessage("Erreur lors de l'envoi de l'image.");
      console.error(error);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  return (
    <div className="add-photo-form">
      <input
        type="file"
        onChange={handleFileChange}
        name="file-upload"
        id="file-upload"
      ></input>
      <label htmlFor="file-upload" id="custom-file-upload">
        {uploading
          ? "Envoi en cours..."
          : file
            ? "Fichier selectionné: " + file.name
            : "Ajouter une photo"}
      </label>
    </div>
  );
}
