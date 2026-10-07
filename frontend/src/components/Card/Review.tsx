import "./index.css";

export default function Card({ review = null, photo = null }) {
  const isConnected = !!localStorage.getItem("token");

  const removeImage = async (id) => {
    console.log("SUPPRESSION TEMPORAIREMENT DESACCTIVEE", id);
    return;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/photos/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Photo deletion failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (review) {
    return (
      <div className="product-card">
        <p>{review.id}</p>
        <p>{review.snippet}</p>
      </div>
    );
  }
  if (photo) {
    return (
      <div className="photo-container">
        <img
          className="carousel-img"
          src={photo.url}
          alt="slider"
          style={{
            zIndex: 2,
          }}
        />
        {isConnected ? (
          <button
            onClick={() => removeImage(photo.id)}
            className="remove-button"
          >
            Supprimer
          </button>
        ) : null}
      </div>
    );
  }
  return <div>Chargement...</div>;
}
