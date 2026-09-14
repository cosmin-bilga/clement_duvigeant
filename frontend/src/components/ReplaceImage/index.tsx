import { useState } from "react";

export default function ReplaceImage({ id }) {
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
    formData.append("id", id);
    formData.append("photo", file);

    try {
      const response = await fetch(
        "http://localhost/clement_duvigeant/backend/photos/",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Photo upload failed");
      }

      console.log("Replaced photo:", id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={handleFormChange}>Remplacer Image</button>
      <form>
        <input type="file" onChange={handleFileChange}></input>
        <input type="submit" value={"Remplacer"} onClick={submitImage}></input>
      </form>
    </>
  );
}
