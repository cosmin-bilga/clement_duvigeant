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
      <div className="review-card">
        <p>{review.user_name}</p>
        <img src={review.user_thumbail} alt="user profile picture" />
        <p>{review.date}</p>
        <p>{review.snippet}</p>        
        <p>{review.rating}</p>
        <p>{review.user_link}</p>        
      </div>
    );
  }
  if (review && isConnected) {
    return(
       <div className="review-card-admin">
        <p>{review.user_name}</p>
        <img src={review.user_thumbail} alt="user profile picture" />
        <p>{review.date}</p>
        <p>{review.snippet}</p>       
        <p>{review.rating}</p>
        {/* <p>{review.status}</p> */}
        <p>Hello World !</p>
        <button>Valider</button>
        <button>Refuser</button>        
      </div>
    )
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
