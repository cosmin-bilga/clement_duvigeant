import { useState } from "react";
import "./index.css";

export default function AddImage({ location }) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormChange = (e) => {
    setOpen(!open);
  };

  const submitImage = async (e) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("location", location);
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
        throw new Error(data.error || "Photo upload failed");
      }

      console.log("Uploaded photo:", location);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="add-photo-form">
      <input
        type="file"
        onChange={handleFileChange}
        name="file-upload"
        id="file-upload"
      ></input>
      <label htmlFor="file-upload" id="custom-file-upload">
        {file ? "Fichier selectionné: " + file.name : "Choisir une photo"}
      </label>
      {file && (
        <input type="submit" value={"Ajouter"} onClick={submitImage}></input>
      )}
    </form>
  );
}
