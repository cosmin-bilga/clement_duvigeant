import "./index.css";
import { useState } from "react";

export default function Card({ review = null, photo = null, addMessage, onReviewUpdated, }) {
  const isConnected = !!localStorage.getItem("token");
  const [isUpdating, setIsUpdating] = useState(false);
  const MAX_SNIPPET_LENGTH = 150;

  const removeImage = async (id) => {
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

      addMessage("Photo supprimé avec succes.");
    } catch (error) {
      console.error(error);
    }
  };
  const updateReviewStatus = async (
  id: number,
  status: "approved" | "rejected"
) => {
  try {
        if (isUpdating) return;
        setIsUpdating(true)
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/reviews/?id=${id}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: new URLSearchParams({
              status,
            }),
          }
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Echec de modification du statut !");
        }
        await onReviewUpdated?.();
        return data;                
      } catch (e) {         
        console.error("Erreur modification statut :", e);
      }
      finally {
        setIsUpdating(false)
      }
};
const truncate = (str: string, maxLength: number) => {  
  if (str.length <= maxLength) {
    return str;
  }

  const portion = str.slice(0, maxLength);
  const lastSpace = portion.lastIndexOf(" ");

  return (
    lastSpace > 0
      ? portion.slice(0, lastSpace)
      : portion
  ) + "…";
};
  if (review && isConnected) {
    return(
       <div className="review-card-admin">
        <p>{review.user_name}</p>
        <img src={review.user_thumbnail} alt="user profile picture" height="40" width="40"/>
        <p>{review.date}</p>
        <p>
          {truncate(review.snippet, MAX_SNIPPET_LENGTH)}
          {review.snippet.length > MAX_SNIPPET_LENGTH && (
            <>
            <a
              href={review.user_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lire plus
            </a>
            </>
          )}
        </p>
        <p>{review.rating}</p>
        <p>{review.status}</p>
        <button disabled={isUpdating} onClick={() => updateReviewStatus(review.id, "approved")}>{isUpdating ? "Modification..." : "Valider"}</button>
        <button disabled={isUpdating} onClick={() => updateReviewStatus(review.id, "rejected")}>{isUpdating ? "Modification..." : "Refuser"}</button>
      </div>
    );
  }
  if (review) {
    return (
      <div className="review-card">
        <p>{review.user_name}</p>
        <img src={review.user_thumbnail} alt="user profile picture" />
        <p>{review.date}</p>
        <p>
          {truncate(review.snippet, MAX_SNIPPET_LENGTH)}
          {review.snippet.length > MAX_SNIPPET_LENGTH && (
            <>
            <a
              href={review.user_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lire plus
            </a>
            </>
          )}
        </p>
        <p>{review.rating}</p>
        <p>{review.user_link}</p>
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
